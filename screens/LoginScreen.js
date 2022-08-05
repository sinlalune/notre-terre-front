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

// Import of Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
//Connection to Redux
import { connect } from "react-redux";

function LoginScreen(props) {
	const [listErrorsSignIn, setListErrorsSignIn] = useState([]);

	const [signInEmail, setSignInEmail] = useState("");
	const [signInPassword, setSignInPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isSignUpLoading, setIsSignUpLoading] = useState(false);

	useEffect(() => {
		AsyncStorage.getItem("user", (err, value) => {
			if (value) {
				console.log("🌄🌄🌄 JSON.parse(value)", JSON.parse(value));
				props.saveUserData(JSON.parse(value));
				props.navigation.navigate("BottomNavigator", { screen: "Research" });
			}
		});
	}, []);

	var handleSubmitSignIn = async () => {
		// fermeture du clavier
		Keyboard.dismiss();
		setIsLoading(true);
		console.log("🤓🤓🤓 SignIn infos : ", signInEmail, signInPassword);

		const data = await fetch(`${API_BACKEND}/users/sign-in`, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`,
		});

		const body = await data.json();
		setIsLoading(false);
		console.log("Enregistrement sign in : ", body);

		if (body.result) {
			props.saveUserData(body.searchUser.token);
			AsyncStorage.setItem("user", JSON.stringify(body.searchUser));

			props.navigation.navigate("BottomNavigator", { screen: "Research" });
		} else {
			setListErrorsSignIn(body.error);
		}
	};

	const handleRedirect = () => {
		setIsSignUpLoading(true);
		setTimeout(() => {
			setIsSignUpLoading(false);
			props.navigation.navigate("Register");
		}, 800);
	};

	var tabErrorsSignIn = listErrorsSignIn.map((error, i) => {
		return <Text>{error}</Text>;
	});

	return (
		<View style={styles.mainView}>
			<KeyboardAwareScrollView
				extraScrollHeight={30} // (when scroll) to have extra height between keyboard and text input
				enableOnAndroid={true}
				extraHeight={(windowHeight * 1) / 3} // make some height so the keyboard wont cover other component
				contentContainerStyle={{ flexGrow: 1 }} // make the scrollView full screen
			>
				<View
					style={{
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						height: (windowHeight * 1) / 3,
					}}
				>
					<Text style={styles.logoText}>Notre Terre</Text>
					<Text style={styles.tagLineText}>
						Vous aussi, invitez les meilleurs aliments dans votre cuisine
					</Text>
				</View>
				<ImageBackground
					source={require("../assets/home.jpg")}
					style={styles.inputsSection}
				>
					{/* Sign-In */}
					<Text style={styles.connectTitle}>Se connecter</Text>
					<View
						style={{
							height: (windowHeight * 1) / 3,
							width: windowWidth * 0.9,
							alignItems: "center",
							justifyContent: "space-evenly",
						}}
					>
						<TextInput
							style={styles.formInput}
							placeholder="Email"
							onChangeText={(val) => setSignInEmail(val.toLowerCase())}
							autoComplete="off"
							autocorrect={false}
							placeholderTextColor={"#0EA888"}
						/>
						<TextInput
							style={styles.formInput}
							placeholder="Mot de passe"
							secureTextEntry={true}
							autoComplete="off"
							placeholderTextColor={"#0EA888"}
							onChangeText={(val) => setSignInPassword(val)}
						/>
						{tabErrorsSignIn}
						{isLoading ? (
							<Button
								buttonStyle={{
									backgroundColor: "#0EA888",
									width: windowWidth * 0.9,
									borderRadius: 10,
								}}
								icon={
									<Icon
										name="check-circle-o"
										size={25}
										color="white"
										style={{ marginRight: 4 }}
									/>
								}
								title="Se connecter"
								type="solid"
								loading
								onPress={() => {
									handleSubmitSignIn();
								}}
							/>
						) : (
							<Button
								buttonStyle={{
									backgroundColor: "#0EA888",
									width: windowWidth * 0.9,
									borderRadius: 10,
								}}
								icon={
									<Icon
										name="check-circle-o"
										size={25}
										color="white"
										style={{ marginRight: 4 }}
									/>
								}
								title="Se connecter"
								type="solid"
								onPress={() => {
									handleSubmitSignIn();
								}}
							/>
						)}
					</View>

					{/* Connexion avec Facebook */}
					<View
						style={{
							flexDirection: "row",
							width: windowWidth * 0.9,
							justifyContent: "space-between",
						}}
					>
						<Button
							buttonStyle={{
								backgroundColor: "#2D9BEF",
								width: windowWidth * 0.43,
								borderRadius: 10,
								justifyContent: "space-around",
								height: 43,
							}}
							icon={
								<Icon
									name="facebook-square"
									size={25}
									color="white"
									style={{ marginRight: 4 }}
								/>
							}
							title="Facebook"
						/>
						{/* Connexion avec Google */}
						<Button
							buttonStyle={{
								backgroundColor: "white",
								width: windowWidth * 0.43,
								borderWidth: 2,
								borderColor: "#DADDE1",
								justifyContent: "space-around",
								borderRadius: 10,
								height: 43,
							}}
							titleStyle={{ color: "grey" }}
							icon={
								<Image
									source={{
										uri: "https://res.cloudinary.com/matthieudev/image/upload/v1659644930/google_keoek6.png",
									}}
									style={{
										width: 25,
										height: 25,
									}}
								/>
							}
							title="Google"
						/>
					</View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							width: windowWidth * 0.7,
						}}
					>
						<View
							style={{
								flex: 1,
								height: 3,
								backgroundColor: "#0EA888",
								borderWidth: 1,
								borderColor: "white",
							}}
						/>
					</View>
					{isSignUpLoading ? (
						<Button
							loading
							buttonStyle={{
								backgroundColor: "white",
								width: windowWidth * 0.9,
								borderRadius: 10,
								borderWidth: 2,
							}}
							title="Vous êtes nouveau ? Inscrivez-vous ici"
							type="outline"
							onPress={() => {
								handleSubmitSignIn();
							}}
						/>
					) : (
						<Button
							buttonStyle={{
								backgroundColor: "white",
								width: windowWidth * 0.9,
								borderRadius: 10,
								borderWidth: 2,
							}}
							title="Vous êtes nouveau ? Inscrivez-vous ici"
							type="outline"
							onPress={() => handleRedirect()}
						/>
					)}
				</ImageBackground>
			</KeyboardAwareScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	connectTitle: {
		color: "#0EA888",
		fontWeight: "bold",
		fontSize: 22,
		backgroundColor: "white",
		padding: windowHeight * 0.01,
		borderRadius: 10,
		marginBottom: -15,
	},
	mainView: {
		flex: 1,
		backgroundColor: "#0EA888",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	logoText: {
		fontWeight: "bold",
		color: "white",
		fontSize: 35,
		fontFamily: "notoserif",
	},
	tagLineText: {
		color: "white",
		fontSize: 12,
		textAlign: "center",
		marginTop: 5,
		fontStyle: "italic",
	},
	inputsSection: {
		height: (windowHeight * 2) / 3 + 30,
		paddingTop: windowHeight * 0.014,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
	},
	signupLink: {
		color: "#0EA888",
		fontWeight: "bold",
		fontSize: 14,
		backgroundColor: "white",
		padding: windowHeight * 0.01,
		borderRadius: 10,
	},
	formInput: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "#969696",
		width: "100%",
		height: 45,
		padding: 10,
		fontWeight: "bold",
		fontSize: 16,
		color: "#0EA888",
	},
	inputName: {
		color: "#0EA888",
		borderColor: "#DADDE1",
		fontWeight: "bold",
		fontSize: 19,
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
