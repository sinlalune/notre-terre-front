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
  const [listErrorsSignIn, setListErrorsSignIn] = useState([]);

 
    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')
  
  

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

  var handleSubmitSignIn = async () => {
		console.log("🤓 SignIn infos : ", signInEmail, signInPassword);

		const data = await fetch("/sign-in", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`,
		});

		const body = await data.json();

		console.log(body);

		if (body.result == true) {
			props.addToken(body.searchUser.token);
			setUserExists(true);
		} else {
			setListErrorsSignIn(body.error);
		}
	};

  if (userExists) {
    return <Redirect to="/Research" />;
  }

  var tabErrorsSignUp = listErrorsSignUp.map((error, i) => {
    return <p>{error}</p>;
  });

  var tabErrorsSignIn = listErrorsSignIn.map((error, i) => {
		return <p>{error}</p>;
	});

  return (
    <ImageBackground
      source={require("../assets/home.jpg")}
      style={styles.container}
    >
      <Text style={{ marginBottom: 25}}>S'inscrire</Text>
      <Text>email</Text>
      <Input
      leftIcon={{ type: 'MaterialIcons', name: 'email' }}
        containerStyle={{ width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        onChangeText={(val) => setSignUpEmail(val.toLowerCase())}
      />
      <Text>Mot de passe</Text>
      <Input
        containerStyle={{ marginBottom: 25}}
        inputStyle={{ marginLeft: 10 }}
        secureTextEntry={true}
        onChangeText={(val) => setSignUpPassword(val)}
      />

      {tabErrorsSignUp}

      <Button
      style={{ marginBottom: 25}}
        title="S'inscrire avec mon email"
        type="solid"
        buttonStyle={{ backgroundColor: "#0CA789" }}
        onPress={() => {
          props.navigation.navigate("BottomNavigator", { screen: "Research" });
          handleSubmitSignUp();
        }}
      />

      {/* Sign-In */}

			<Text style={{ marginBottom: 25}}>Se connecter</Text>
			<Text>email</Text>
			<Input
      leftIcon={{ type: 'MaterialIcons', name: 'email' }}
				containerStyle={{ marginBottom: 25, width: "70%" }}
				inputStyle={{ marginLeft: 10 }}
				onChangeText={(val) => setSignInEmail(val.target.value.toLowerCase())}
			/>
			<Text>Mot de passe</Text>
			<Input
				containerStyle={{ marginBottom: 25, width: "70%" }}
				inputStyle={{ marginLeft: 10 }}
        secureTextEntry={true}
				onChangeText={(val) => setSignInPassword(val.target.value)}
			/>

			{tabErrorsSignIn}

			<Button
				title="Se connecter"
				type="solid"
				buttonStyle={{ backgroundColor: "#0CA789" }}
				onPress={() => {
					props.navigation.navigate("BottomNavigator", { screen: "Research" });
					handleSubmitSignIn();
				}}
			/>

			{/* Connexion avec Facebook */}
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
  }
});

/* 
function mapDispatchToProps(dispatch){
  return{
    addToken: function(token) {
      dispatch({type: 'addToken', token:token})
    }
  }
}
*/

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
