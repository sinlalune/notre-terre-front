import React, { useState, useEffect } from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { REACT_APP_API_BACKEND } from "@env";

import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	TextInput,
} from "react-native";

import { Button, Input } from "react-native-elements";

// Import of Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//Connection to Redux
import { connect } from "react-redux";

export default function LoginScreen(props) {
	console.log("API backend", REACT_APP_API_BACKEND);
	const [signUpEmail, setSignUpEmail] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");
	const [userExists, setUserExists] = useState(false);

	console.log("url du backend", process.env.REACT_APP_BACKEND_URL);

	const [listErrorsSignUp, setListErrorsSignUp] = useState([]);
	const [listErrorsSignIn, setListErrorsSignIn] = useState([]);

	const [signInEmail, setSignInEmail] = useState("");
	const [signInPassword, setSignInPassword] = useState("");

	useEffect(() => {
		AsyncStorage.getItem("user", (err, value) => {
			console.log(value);
			if (value) {
				setUserExists(true);
			}
		});
	}, []);

	var handleSubmitSignUp = async () => {
		console.log("🤖 SignUp infos: ", signUpEmail, signUpPassword);

		const data = await fetch(`${REACT_APP_API_BACKEND}/users/sign-up`, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: `emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`,
		});

		const body = await data.json();
		console.log(body);

		if (body.result) {
			AsyncStorage.setItem("user", body.searchUser);

			// props.addToken(body.token);
			// setUserExists(true);
			console.log(body);
			props.navigation.navigate("BottomNavigator");
		} else {
			setListErrorsSignUp(body.error);
		}
	};

	var handleSubmitSignIn = async () => {
		console.log("🤓 SignIn infos : ", signInEmail, signInPassword);

		const data = await fetch(`${REACT_APP_API_BACKEND}/users/sign-in`, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`,
		});

		const body = await data.json();

		console.log("enregistrement sign in : ", body);

		if (body.result) {
			console.log("resultat à true :", true);

			// props.addToken(body.searchUser.token);
			AsyncStorage.setItem("user", body.searchUser);
			props.navigation.navigate("BottomNavigator");
		} else {
			console.log("resultat à false :", false);
			setListErrorsSignIn(body.error);
		}
	};

	if (userExists) {
		return 1;
	}

	var tabErrorsSignUp = listErrorsSignUp.map((error, i) => {
		return <Text>{error}</Text>;
	});

	var tabErrorsSignIn = listErrorsSignIn.map((error, i) => {
		return <Text>{error}</Text>;
	});

	return (
		<View>
			{/* <Loader loading={loading} /> */}

			<ImageBackground source={require("../assets/home.jpg")}>
				<Text>S'inscrire</Text>
				<Input
					placeholder="Votre email"
					onChangeText={(val) => setSignUpEmail(val.toLowerCase())}
				/>
				<Input
					placeholder="Votre mot de passe"
					secureTextEntry={true}
					onChangeText={(val) => setSignUpPassword(val)}
				/>
				{tabErrorsSignUp}
				<Button
					title="S'inscrire avec mon email"
					onPress={() => {
						handleSubmitSignUp();
					}}
				/>
				{/* Sign-In */}
				<Text>Se connecter</Text>
				<Input
					placeholder="Votre email"
					onChangeText={(val) => setSignInEmail(val.toLowerCase())}
				/>
				<Input
					placeholder="Votre mot de passe"
					secureTextEntry={true}
					onChangeText={(val) => setSignInPassword(val)}
				/>
				{tabErrorsSignIn}
				<Button
					title="Se connecter avec mon email"
					type="solid"
					onPress={() => {
						handleSubmitSignIn();
					}}
				/>

				<Text onPress={() => navigation.navigate("ResearchScreen")}>
					Vous êtes nouveau ? Inscrivez-vous ici
				</Text>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						paddingLeft: 15,
						paddingRight: 15,
					}}
				>
					<View style={{ flex: 1, height: 2, backgroundColor: "black" }} />
					<View>
						<Text style={{ width: 50, textAlign: "center" }}>OU</Text>
					</View>
					<View style={{ flex: 1, height: 2, backgroundColor: "black" }} />
				</View>

				{/* Connexion avec Facebook */}
				<Button
					title="Continuer avec Facebook"
					onPress={() => {
						props.navigation.navigate("BottomNavigator", {
							screen: "Research",
						});
					}}
				/>
				{/* Connexion avec Google */}
				<Button
					title="Continuer avec Google"
					onPress={() => {
						props.navigation.navigate("BottomNavigator", {
							screen: "Research",
						});
					}}
				/>
				<View>
					<Button
						title="Delete all data dans le async storage"
						onPress={() => AsyncStorage.clear()}
					/>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	mainBody: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#0CA789",
	},
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
        dispatch({ type: 'saveUser', email: email, password: password, token:token })
      }
    }
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(HomeScreen);
  */
