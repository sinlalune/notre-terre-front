import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

import { connect } from "react-redux";

const largeur = Dimensions.get("window").width;
const hauteur = Dimensions.get("window").height;

export default function ValidateScreen() {
	useEffect(() => {
		setTimeout(() => {
			// Redirige vers la page Research après l'insciption
			props.navigation.navigate("BottomNavigator", { screen: "Research" });
		}, 800);
	}, []);

	return (
		<View style={styles.mainView}>
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
			<Image
				source={require("../assets/validate.png")}
				style={{
					height: 150,
					resizeMode: "contain",
					marginTop: hauteur * 0.05,
				}}
			/>
			<Text
				style={{
					fontWeight: "bold",
					fontSize: 18,
					color: "white",
					marginTop: hauteur * 0.02,
				}}
			>
				Inscription validée !
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	mainView: {
		backgroundColor: "#0EA888",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marginTop: hauteur * -0.3,
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
		marginBottom: hauteur * 0.02,
	},
});
