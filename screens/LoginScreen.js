import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { REACT_APP_API_BACKEND } from "@env";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { API_BACKEND } from "@env";

const largeur = Dimensions.get("window").width;
const hauteur = Dimensions.get("window").height;

function LoginScreen(props) {
	const [listErrorsSignIn, setListErrorsSignIn] = useState([]);

	const [signInEmail, setSignInEmail] = useState("");
	const [signInPassword, setSignInPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isSignupLoading, setIsSignupLoading] = useState(false);

	useEffect(() => {
		AsyncStorage.getItem("user", (err, value) => {
			if (value) {
				console.log("🌄🌄🌄 JSON.parse(value)", JSON.parse(value));
				props.saveUserData(JSON.parse(value));
				props.navigation.navigate("BottomNavigator", { screen: "Research" });
			}
		});
	}, []);
	console.log(
		"➡️ Mise en place du AsyncStorage :",
		AsyncStorage.getItem("user")
	);

	var handleSubmitSignIn = async () => {
		console.log("➡️ API du backend", API_BACKEND);
		// Fermeture du clavier
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
		console.log("✅ Enregistrement sign in : ", body);

		if (body.result) {
			props.saveUserData(body.searchUser.token);
			AsyncStorage.setItem("user", JSON.stringify(body.searchUser));

			props.navigation.navigate("BottomNavigator", { screen: "Research" });
		} else {
			setListErrorsSignIn(body.error);
		}
	};

	const handleRedirect = () => {
		setIsSignupLoading(true);
		setTimeout(() => {
			setIsSignupLoading(false);
			props.navigation.navigate("Register");
			// props.navigation.navigate("BottomNavigator", { screen: "Profile" });
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
				extraHeight={(hauteur * 1) / 3} // make some height so the keyboard wont cover other component
				contentContainerStyle={{ flexGrow: 1 }} // make the scrollView full screen
			>
				<View style={styles.header}>
					<Image
						source={require("../assets/logonotreterre.png")}
						style={{
							height: 150,
							resizeMode: "contain",
						}}
					/>
					<Text style={styles.logoText}>Notre Terre</Text>
					<Text style={styles.tagLineText}>
						Vous aussi, invitez les meilleurs aliments dans votre cuisine
					</Text>
				</View>

				<ImageBackground
					source={require("../assets/loginbackground.jpg")}
					style={styles.background}
				>
					{/* Sign-In */}

					<ScrollView>
						<View style={styles.containerGeneral}>
							<Text style={styles.titleCategory}>Se connecter</Text>

							<View>
								<TextInput
									style={styles.formInput}
									placeholder="Email"
									onChangeText={(val) => setSignInEmail(val.toLowerCase())}
								/>
								<TextInput
									style={styles.formInput}
									placeholder="Mot de passe"
									secureTextEntry={true}
									onChangeText={(val) => setSignInPassword(val)}
								/>
								<TouchableOpacity>
									<Text
										style={{
											color: "#0EA888",
											fontWeight: "bold",
											fontSize: 16,
											marginBottom: largeur * 0.01,
											marginLeft: largeur * 0.6,
										}}
									>
										Mot de passe oublié ?
									</Text>
								</TouchableOpacity>

								<View
									style={{
										alignItems: "center",
										marginBottom: hauteur * 0.02,
									}}
								>
									{tabErrorsSignIn}
								</View>
							</View>

							<View>
								{isLoading ? (
									<Button
										buttonStyle={styles.submitButton}
										icon={
											<Icon
												name="check-circle-o"
												size={25}
												color="white"
												style={{ marginRight: 15 }}
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
										buttonStyle={styles.submitButton}
										icon={
											<Icon
												name="check-circle-o"
												size={25}
												color="white"
												style={{ marginRight: 15 }}
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
									width: largeur * 0.9,
									justifyContent: "space-between",
									marginTop: hauteur * 0.05,
								}}
							>
								<Button
									buttonStyle={{
										backgroundColor: "#2D9BEF",
										width: largeur * 0.43,
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
									title="Login avec Facebook"
								/>
								{/* Connexion avec Google */}
								<Button
									buttonStyle={{
										backgroundColor: "white",
										width: largeur * 0.43,
										borderWidth: 2,
										borderColor: "#b8b6b6",
										justifyContent: "space-around",
										borderRadius: 10,
										height: 43,
									}}
									titleStyle={{ color: "grey" }}
									icon={
										<Image
											source={{
												uri: "https://cdn.icon-icons.com/icons2/2631/PNG/512/google_search_new_logo_icon_159150.png",
											}}
											style={{
												width: 25,
												height: 25,
												marginRight: 20,
											}}
										/>
									}
									title="Login avec Google"
								/>
							</View>

							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: hauteur * 0.08,
									marginBottom: hauteur * 0.08,
								}}
							>
								<View
									style={{
										flex: 1,
										height: 3,
										marginLeft: largeur * 0.05,
										backgroundColor: "#0EA888",
									}}
								/>
								<View>
									<Text style={{ width: 50, textAlign: "center" }}>OU</Text>
								</View>
								<View
									style={{
										flex: 1,
										height: 3,
										marginRight: largeur * 0.05,
										backgroundColor: "#0EA888",
									}}
								/>
							</View>

							{isSignupLoading ? (
								<Button
									loading
									buttonStyle={{
										backgroundColor: "white",
										borderRadius: 10,
										borderWidth: 2,
										width: largeur * 0.9,
										borderColor: "#2D9BEF",
									}}
									title="Vous êtes nouveau ? Inscrivez-vous ici"
									type="outline"
									titleStyle={{
										color: "#2D9BEF",
										fontWeight: "bold",
										fontSize: 16,
									}}
									onPress={() => {
										handleSubmitSignIn();
									}}
								/>
							) : (
								<Button
									buttonStyle={{
										backgroundColor: "white",
										borderRadius: 10,
										borderWidth: 2,
										width: largeur * 0.9,
										borderColor: "#2D9BEF",
									}}
									title="Vous êtes nouveau ? Inscrivez-vous ici"
									type="outline"
									titleStyle={{
										color: "#2D9BEF",
										fontWeight: "bold",
										fontSize: 16,
									}}
									onPress={() => handleRedirect()}
								/>
							)}
						</View>
					</ScrollView>
				</ImageBackground>
			</KeyboardAwareScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
	},
	header: {
		backgroundColor: "#0EA888",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: (hauteur * 1) / 3,
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
		fontStyle: "italic",
	},
	background: {
		flex: 1,
	},
	containerGeneral: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
	},
	titleCategory: {
		justifyContent: "center",
		alignItems: "center",
		color: "white",
		backgroundColor: "#0EA888",
		fontWeight: "bold",
		fontSize: 22,
		height: 40,
		width: largeur * 0.7,
		borderRadius: 10,
		marginTop: hauteur * 0.01,
		marginBottom: hauteur * 0.02,
		textAlign: "center",
		textAlignVertical: "center",
	},
	formInput: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "#b8b6b6",
		width: "100%",
		height: 45,
		padding: 10,
		fontWeight: "bold",
		fontSize: 16,
		width: largeur * 0.9,
		marginBottom: hauteur * 0.01,
		marginTop: hauteur * 0.01,
		color: "#0EA888",
	},
	submitButton: {
		backgroundColor: "#2D9BEF",
		width: largeur * 0.9,
		borderRadius: 10,
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
