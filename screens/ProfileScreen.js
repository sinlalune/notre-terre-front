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
	Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Card, Input } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";

const largeur = Dimensions.get("window").width;
const hauteur = Dimensions.get("window").height;

function ProfileScreen(props) {
	const [listErrorsSignUp, setListErrorsSignUp] = useState([]);

	const [signUpEmail, setSignUpEmail] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");
	const [signUpFirstName, setSignUpFirstName] = useState("");
	const [signUpLastName, setSignUpLastName] = useState("");
	const [signUpAddress, setSignUpAddress] = useState("");
	const [signUpPreference, setSignUpPreference] = useState("");

	var handleLogOut = () => {
		AsyncStorage.clear();
		// props.clearUserData();
	};

	console.log("➡️ Remise à 0 du AsyncStorage : ", AsyncStorage.clear());

	var handleSubmitSignUp = async (props) => {
		console.log("🤖🤖🤖 SignUp infos: ", signUpEmail, signUpPassword);

		const data = await fetch(`http://${REACT_APP_API_BACKEND}/users/sign-up`, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: `
			emailFromFront=${signUpEmail}
			&passwordFromFront=${signUpPassword}
			&firstNameFromFront=${signUpFirstName}
			&lastNameFromFront=${signUpLastName}
			&addressFromFront=${signUpAddress}
			&preferenceFromFront=${signUpPreference}`,
		});

		const body = await data.json();
		console.log(body);

		if (body.result) {
			props.saveUserData(body.searchUser);
			AsyncStorage.setItem("user", JSON.stringify(body.searchUser));

			// props.navigation.navigate("Validate");
			props.navigation.navigate("BottomNavigator", { screen: "Research" });
		} else {
			setListErrorsSignUp(body.error);
		}
	};

	var tabErrorsSignUp = listErrorsSignUp.map((error, i) => {
		return <Text>{error}</Text>;
	});

	return (
		<View style={styles.mainView}>
			<KeyboardAwareScrollView
				extraScrollHeight={30} // (when scroll) to have extra height between keyboard and text input
				enableOnAndroid={true}
				extraHeight={(hauteur * 1) / 3} // make some height so the keyboard wont cover other component
				// contentContainerStyle={{ flexGrow: 1 }} // make the scrollView full screen
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
					{/* Sign-Up */}

					<ScrollView>
						<View style={styles.containerGeneral}>
							<Text style={styles.titleCategory}>Mon profil</Text>
							<Image
								source={require("../assets/avatar.png")}
								style={{
									width: 120,
									height: 120,
									alignContent: "center",
									alignItems: "center",
									marginBottom: largeur * 0.02,
									alignSelf: "center",
								}}
							/>
							<Text
								style={{
									alignContent: "center",
									alignItems: "center",
									marginBottom: hauteur * 0.005,
									marginBottom: hauteur * 0.005,
									color: "white",
									backgroundColor: "#0EA888",
									fontWeight: "bold",
									fontSize: 16,
									height: 25,
									width: largeur * 0.2,
									borderRadius: 10,
									alignSelf: "center",
									textAlign: "center",
									textAlignVertical: "center",
								}}
							>
								Identité
							</Text>
							<TextInput
								style={{
									backgroundColor: "#dedcdc",
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
								}}
								placeholder="Email"
								onChangeText={(val) => setSignUpEmail(val.toLowerCase())}
								editable={false}
								selectTextOnFocus={false}
							/>
							<TextInput
								style={styles.formInput}
								placeholder="Mot de passe"
								secureTextEntry={true}
								onChangeText={(val) => setSignUpPassword(val)}
							/>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									width: largeur * 0.9,
								}}
							>
								<TextInput
									style={styles.formInputRow}
									placeholder="Nom"
									onChangeText={(val) =>
										setSignUpLastName(val.toUpperCaseCase())
									}
								/>
								<TextInput
									style={styles.formInputRow}
									placeholder="Prénom"
									onChangeText={(val) =>
										setSignUpFirstName(
											val[0].toUpperCase() + val.slice(1).toLowerCase(),
										)
									}
								/>
							</View>
							<Text
								style={{
									alignContent: "center",
									alignItems: "center",
									marginBottom: hauteur * 0.005,
									marginBottom: hauteur * 0.005,
									color: "white",
									backgroundColor: "#0EA888",
									fontWeight: "bold",
									fontSize: 16,
									height: 25,
									width: largeur * 0.2,
									borderRadius: 10,
									alignSelf: "center",
									textAlign: "center",
									textAlignVertical: "center",
								}}
							>
								Adresse
							</Text>
							<TextInput
								style={styles.formInput}
								placeholder="Libellé de voie"
								onChangeText={(val) => setSignUpAddress(val)}
							/>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									width: largeur * 0.9,
								}}
							>
								<TextInput
									style={styles.formInputRow}
									placeholder="Code postal"
									onChangeText={(val) => setSignUpAddress(val)}
								/>
								<TextInput
									style={styles.formInputRow}
									placeholder="Ville"
									onChangeText={(val) => setSignUpAddress(val)}
								/>
							</View>
							{tabErrorsSignUp}
							<Text
								style={{
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
									textAlign: "center",
									textAlignVertical: "center",
								}}
							>
								Sélectionnez votre préférence
							</Text>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: hauteur * 0.02,
									justifyContent: "space-around",
								}}
							>
								<Button
									buttonStyle={styles.cardButton}
									icon={
										<Image
											source={require("../assets/tomato.png")}
											style={{ width: 50, height: 50 }}
										/>
									}
								/>
								<Button
									buttonStyle={styles.cardButton}
									icon={
										<Image
											source={require("../assets/carotte.png")}
											style={{ width: 50, height: 50 }}
										/>
									}
								/>
								<Button
									buttonStyle={styles.cardButton}
									icon={
										<Image
											source={require("../assets/brocoli.png")}
											style={{ width: 50, height: 50 }}
										/>
									}
								/>
								<Button
									buttonStyle={styles.cardButton}
									icon={
										<Image
											source={require("../assets/fraise.png")}
											style={{ width: 50, height: 50 }}
										/>
									}
								/>
								<Button
									buttonStyle={styles.cardButton}
									icon={
										<Image
											source={require("../assets/pois.png")}
											style={{ width: 50, height: 50 }}
										/>
									}
								/>
							</View>
							<Button
								buttonStyle={styles.submitButton}
								title="Modifier mon profil"
								icon={
									<Icon
										name="check-circle-o"
										size={25}
										color="white"
										style={{ marginRight: 12 }}
									/>
								}
								onPress={() => {
									handleSubmitSignUp();
								}}
							/>

							<Button
								buttonStyle={styles.logoutButton}
								title="Se déconnecter"
								onPress={() => {
									handleLogOut();
									Alert.alert(
										"Déconnexion",

										"Vous êtes sûr ? Vous allez être déconnecté.",
										[
											{
												text: "❌ Annuler",
												onPress: () => {
													return null;
												},
											},
											{
												text: "✅ Confirmer",
												onPress: () => {
													props.navigation.navigate("Login");
												},
											},
										],
										{ cancelable: false },
									);
								}}
							></Button>
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
	formInputRow: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "#b8b6b6",
		width: "100%",
		height: 45,
		padding: 10,
		fontWeight: "bold",
		fontSize: 16,
		width: largeur * 0.43,
		marginBottom: hauteur * 0.01,
		marginTop: hauteur * 0.01,
		color: "#0EA888",
	},
	cardButton: {
		backgroundColor: "white",
		borderColor: "#b8b6b6",
		borderWidth: 2,
		borderRadius: 10,
		marginHorizontal: largeur * 0.01,
	},
	submitButton: {
		color: "#ffffff",
		backgroundColor: "#2D9BEF",
		padding: 10,
		borderRadius: 10,
		textAlign: "center",
		marginBottom: 15,
		width: largeur * 0.9,
		marginTop: hauteur * 0.1,
	},
	logoutButton: {
		color: "#ffffff",
		backgroundColor: "#0EA888",
		padding: 10,
		borderRadius: 10,
		textAlign: "center",
		marginBottom: hauteur * 0.1,
		width: largeur * 0.9,
		marginBottom: hauteur * 0.025,
	},
});

function mapStateToProps(state) {
	return {
		saveUserData: function (data) {
			dispatch({ type: "saveUserData", data: data });
		},
	};
}

export default connect(mapStateToProps, null)(ProfileScreen);
