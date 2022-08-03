import React, { useState, useEffect } from "react";

import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
} from "react-native";

import { Button, Input } from "react-native-elements";

// Import of Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//Connection to Redux
import { connect } from "react-redux";

export default function HomeScreen(props) {
<<<<<<< HEAD
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
=======
	const [signUpEmail, setSignUpEmail] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");
	const [userExists, setUserExists] = useState(false);

	console.log("url du backend", process.env.REACT_APP_BACKEND_URL);

	const [listErrorsSignUp, setListErrorsSignUp] = useState([]);
	const [listErrorsSignIn, setListErrorsSignIn] = useState([]);

	const [signInEmail, setSignInEmail] = useState("");
	const [signInPassword, setSignInPassword] = useState("");

	// useEffect(() => {
	// 	async () => {
	// 		AsyncStorage.getItem("token").then((value) => {
	// 			console.log(value);

	// 			if (value) {
	// 				setUserExists(true);
	// 			}
	// 		});
	// 	};
	// }, []);

	useEffect(() => {
		AsyncStorage.getItem("user", (err, value) => {
			console.log(value);
			// if (value) {
			// 	setUserExists(true);
			// }
		});
	}, []);

	var handleSubmitSignUp = async (props) => {
		console.log("🤖 SignUp infos: ", signUpEmail, signUpPassword);

		const data = await fetch("http://10.2.2.164:3000/users/sign-up", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: `emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`,
		});

		const body = await data.json();
		console.log(body);

		if (body.result == true) {
			AsyncStorage.setItem("user", body.searchUser);

			props.addToken(body.token);
			setUserExists(true);
		} else {
			setListErrorsSignUp(body.error);
		}
	};

	var handleSubmitSignIn = async (props) => {
		console.log("🤓 SignIn infos : ", signInEmail, signInPassword);

		const data = await fetch("http://10.2.2.164:3000/users/sign-in", {
>>>>>>> ab63679c70eb9b45c806a9e101564f1c12692228
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`,
		});

		const body = await data.json();

		console.log(body);

		if (body.result == true) {
<<<<<<< HEAD
			props.addToken(body.searchUser.token);
			setUserExists(true);
		} else {
=======
			console.log("resultat à true :", true);

			props.addToken(body.searchUser.token);
			AsyncStorage.setItem("user", body.searchUser.token);
			setUserExists(true);
		} else {
			console.log("resultat à false :", false);
>>>>>>> ab63679c70eb9b45c806a9e101564f1c12692228
			setListErrorsSignIn(body.error);
		}
	};

<<<<<<< HEAD
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
=======
	if (userExists) {
		return props.navigation.navigate("BottomNavigator", { screen: "Research" });
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
			<Text style={{ marginBottom: 25 }}>S'inscrire</Text>
			<Text>email</Text>
			<Input
				leftIcon={{ type: "MaterialIcons", name: "email" }}
				containerStyle={{ width: "70%" }}
				inputStyle={{ marginLeft: 10 }}
				onChangeText={(val) => setSignUpEmail(val.toLowerCase())}
			/>
			<Text>Mot de passe</Text>
			<Input
				containerStyle={{ marginBottom: 25 }}
				inputStyle={{ marginLeft: 10 }}
				secureTextEntry={true}
				onChangeText={(val) => setSignUpPassword(val)}
			/>

			{tabErrorsSignUp}

			<Button
				style={{ marginBottom: 25 }}
				title="S'inscrire avec mon email"
				type="solid"
				buttonStyle={{ backgroundColor: "#0CA789" }}
				onPress={() => {
					props.navigation.navigate("BottomNavigator", { screen: "Research" });
					handleSubmitSignUp();
				}}
			/>

			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={() => {
					props.navigation.navigate("BottomNavigator", { screen: "Research" });
					handleSubmitSignUp();
				}}
			>
				<Text style={styles.buttonTextStyle}>LOGIN</Text>
			</TouchableOpacity>

			{/* Sign-In */}

			<Text style={{ marginBottom: 25 }}>Se connecter</Text>
			<Text>email</Text>
			<Input
				leftIcon={{ type: "MaterialIcons", name: "email" }}
				containerStyle={{ marginBottom: 25, width: "70%" }}
				inputStyle={{ marginLeft: 10 }}
				onChangeText={(val) => setSignInEmail(val.toLowerCase())}
>>>>>>> ab63679c70eb9b45c806a9e101564f1c12692228
			/>
			<Text>Mot de passe</Text>
			<Input
				containerStyle={{ marginBottom: 25, width: "70%" }}
				inputStyle={{ marginLeft: 10 }}
<<<<<<< HEAD
        secureTextEntry={true}
				onChangeText={(val) => setSignInPassword(val.target.value)}
=======
				secureTextEntry={true}
				onChangeText={(val) => setSignInPassword(val)}
>>>>>>> ab63679c70eb9b45c806a9e101564f1c12692228
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
<<<<<<< HEAD
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
=======
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
			<View>
				<Button
					title="Delete all data dans le async storage"
					onPress={() => AsyncStorage.clear()}
				/>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonStyle: {
		backgroundColor: "#7DE24E",
		borderWidth: 0,
		color: "#FFFFFF",
		borderColor: "#7DE24E",
		height: 40,
		alignItems: "center",
		borderRadius: 30,
		marginLeft: 35,
		marginRight: 35,
		marginTop: 20,
		marginBottom: 25,
	},
>>>>>>> ab63679c70eb9b45c806a9e101564f1c12692228
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
