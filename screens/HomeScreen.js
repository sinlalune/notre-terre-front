import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, ImageBackground } from "react-native";

import { Button, Input } from "react-native-elements";

// Import of Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//Connection to Redux
import { connect } from "react-redux";

export default function HomeScreen(props) {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [userExists, setUserExists] = useState(false);

  const [listErrorsSignUp, setListErrorsSignUp] = useState([]);

  /*
    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')
  
  */

  var handleSubmitSignUp = async () => {
    console.log("🤖 SignUp infos: ", signUpEmail, signUpPassword);

    const data = await fetch("/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`,
    });

    const body = await data.json();

    if (body.result == true) {
      props.addToken(body.token);
      setUserExists(true);
    } else {
      setListErrorsSignUp(body.error);
    }
  };

  if (userExists) {
    return <Redirect to="/Research" />;
  }

  var tabErrorsSignUp = listErrorsSignUp.map((error, i) => {
    return <p>{error}</p>;
  });

  return (
    <ImageBackground
      source={require("../assets/home.jpg")}
      style={styles.container}
    >
      <Text style={styles.basic}>S'inscrire ou se connecter</Text>
      <Text>email</Text>
      <Input
        containerStyle={{ marginBottom: 25, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        onChangeText={(val) => setSignUpEmail(val.toLowerCase())}
      />
      <Text>Mot de passe</Text>
      <Input
        containerStyle={{ marginBottom: 25, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        onChangeText={(val) => setSignUpPassword(val)}
      />

      {tabErrorsSignUp}

      <Button
        title="S'inscrire ou se connecter avec mon email"
        type="solid"
        buttonStyle={{ backgroundColor: "#0CA789" }}
        onPress={() => {
          props.navigation.navigate("BottomNavigator", { screen: "Garden" });
          handleSubmitSignUp();
        }}
      />
      <Button
        title="Continuer avec Facebook"
        type="solid"
        buttonStyle={{ backgroundColor: "#3b5998" }}
        onPress={() => {
          props.navigation.navigate("BottomNavigator", { screen: "Research" });
        }}
      />
      <Button
        title="Continuer avec Google"
        type="solid"
        buttonStyle={{ backgroundColor: "#000000" }}
        onPress={() => {
          props.navigation.navigate("BottomNavigator", { screen: "Research" });
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  basic: {
    fontFamily: "Dosis",
  },
});

/*
  function mapDispatchToProps(dispatch) {
    return {
      onSubmitUser: function (email, password) {
        dispatch({ type: 'saveUser', email: email, password: password })
      }
    }
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(HomeScreen);
  */
