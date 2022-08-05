import React, { useState, useEffect } from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { API_BACKEND } from "@env";

import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
	Image,
	Keyboard,
	TextInput,
	ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Button, Input } from "react-native-elements";

export default function RegisterScreen(props) {
	const [signUpEmail, setSignUpEmail] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");
	const [signUpFirstName, setSignUpFirstName] = useState("");
	const [signUpLastName, setSignUpLastName] = useState("");
	const [signUpGender, setSignUpGender] = useState("");
	const [signUpFamilyQuantity, setSignUpFamilyQuantity] = useState("");
	const [signUpPreference, setSignUpPreference] = useState("");
	const [signUpAddress, setSignUpAddress] = useState("");

	const [listErrorsSignUp, setListErrorsSignUp] = useState([]);

	var handleSubmitSignUp = async (props) => {
		console.log("🤖🤖🤖 SignUp infos: ", signUpEmail, signUpPassword);

		const data = await fetch(`${API_BACKEND}/users/sign-up`, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: `
			emailFromFront=${signUpEmail}
			&passwordFromFront=${signUpPassword}
			&firstNameFromFront=${signUpFirstName}
			&lastNameFromFront=${signUpLastName}
			&genderFromFront=${signUpGender}
			&familyNumberFromFront=${signUpFamilyNumber}
			&preferenceFromFront=${signUpPreference}
			&addressFromFront=${signUpAddress}`,
		});

		const body = await data.json();
		console.log(body);

		if (body.result) {
			AsyncStorage.setItem("user", JSON.stringify(body.searchUser));

			props.saveUserData(body.searchUser);
			// props.navigation.navigate("BottomNavigator", { screen: "Research" });
			props.navigation.navigate("Research");
		} else {
			setListErrorsSignUp(body.error);
		}
	};

	const handleFamilyNumberSelected = () => {
		setIsSignUpLoading(true);
		setTimeout(() => {
			setIsSignUpLoading(false);
			props.navigation.navigate("Register");
		}, 800);
	};

	var tabErrorsSignUp = listErrorsSignUp.map((error, i) => {
		return <Text>{error}</Text>;
	});

	return (
		<View>
			{/* Sign-Up */}
			<Text>S'inscrire</Text>
			<Image
				source={{
					uri: "https://res.cloudinary.com/matthieudev/image/upload/v1659625192/generic-avatar_mpp1wf.png",
				}}
				style={{
					width: 100,
					height: 100,
					alignContent: "center",
					alignItems: "center",
					marginTop: 80,
					alignSelf: "center",
					borderRadius: 50,
				}}
			/>
			<TextInput
				placeholder="Email"
				onChangeText={(val) => setSignUpEmail(val.toLowerCase())}
			/>
			<TextInput
				placeholder="Mot de passe"
				secureTextEntry={true}
				onChangeText={(val) => setSignUpPassword(val)}
			/>
			<TextInput
				placeholder="Confirmation du mot de passe"
				secureTextEntry={true}
				onChangeText={(val) => setSignUpPassword(val)}
			/>

			<Button
				title="Civilité"
				onPress={() => {
					handleGenderSelected();
				}}
			/>

			<Input
				placeholder="Prénom"
				leftIcon={<Icon name="user" size={24} color="black" />}
				onChangeText={(val) => setSignUpFirstName(val)}
			/>
			<Input
				placeholder="Nom"
				leftIcon={<Icon name="user" size={24} color="black" />}
				onChangeText={(val) => setSignUpLastName(val)}
			/>

			<Text>Votre situation familiable ?</Text>

			<Button
				title="1-2"
				onPress={() => {
					handleFamilyNumberSelected();
				}}
			/>

			<Text>Les plus populaires</Text>

			<Image source={require("../assets/podium.jpg")}></Image>

			<Text>Vos préférences ?</Text>

			<Button
				title="Brocoli"
				onPress={() => {
					handlePreferenceSelected();
				}}
			/>

			<Button
				title="Localisez-moi"
				onPress={() => {
					handleSubmitLocate();
				}}
			/>

			<Button
				title="S'inscrire avec mon email"
				onPress={() => {
					handleSubmitSignUp();
				}}
			/>
			{tabErrorsSignUp}
		</View>
	);
}
