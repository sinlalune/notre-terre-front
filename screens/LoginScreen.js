import React, { useState, useEffect } from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { useIsFocused } from "@react-navigation/native";

import { API_BACKEND } from "@env";

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

function LoginScreen(props) {
	const [signUpEmail, setSignUpEmail] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");

	console.log("Url du backend", process.env.API_BACKEND);

	const [listErrorsSignUp, setListErrorsSignUp] = useState([]);
	const [listErrorsSignIn, setListErrorsSignIn] = useState([]);

	const [signInEmail, setSignInEmail] = useState("");
	const [signInPassword, setSignInPassword] = useState("");

	const isFocused = useIsFocused();

	useEffect(() => {
		AsyncStorage.getItem("user", (err, value) => {
			if (value) {
				console.log("🌄🌄🌄 JSON.parse(value)", JSON.parse(value));

				props.saveUserData(JSON.parse(value));
				props.navigation.navigate("BottomNavigator", { screen: "Research" });
			}
		});
	}, []);

	var handleSubmitSignUp = async () => {
		console.log("🤖🤖🤖 SignUp infos: ", signUpEmail, signUpPassword);

		const data = await fetch(`${API_BACKEND}/users/sign-up`, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: `emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`,
		});

		const body = await data.json();
		console.log(body);

		if (body.result) {
			AsyncStorage.setItem("user", JSON.stringify(body.searchUser));

			props.saveUserData(body.searchUser);
			props.navigation.navigate("BottomNavigator", { screen: "Research" });
		} else {
			setListErrorsSignUp(body.error);
		}
	};

	var handleSubmitSignIn = async () => {
		console.log("🤓🤓🤓 SignIn infos : ", signInEmail, signInPassword);

		const data = await fetch(`${API_BACKEND}/users/sign-in`, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`,
		});

		const body = await data.json();

		console.log("Enregistrement sign in : ", body);

		if (body.result) {
			props.saveUserData(body.searchUser.token);
			AsyncStorage.setItem("user", JSON.stringify(body.searchUser));

			props.navigation.navigate("BottomNavigator", { screen: "Research" });
		} else {
			setListErrorsSignIn(body.error);
		}
	};

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

				{/* Sign-Up */}

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

				<Button
					title="Vous êtes nouveau ? Inscrivez-vous ici"
					onPress={() => props.navigation.navigate("Register")}
				></Button>
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

function mapDispatchToProps(dispatch) {
	return {
		saveUserData: function (data) {
			dispatch({ type: "saveUserData", data: data });
		},
	};
}

export default connect(null, mapDispatchToProps)(LoginScreen);
