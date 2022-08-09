import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

import { connect } from "react-redux";

const Header = require("../components/Header");
const largeur = Dimensions.get("window").width;
const hauteur = Dimensions.get("window").height;

const SuccessScreen = (props) => {
	useEffect(() => {
		setTimeout(() => {
			// Redirige vers la page Research après l'insciption
			props.navigation.navigate("BottomNavigator", { screen: "Research" });
		}, 2000);
	}, []);

	return (
		<View style={styles.mainView}>
			<Header />

			<Image
				source={require("../assets/success.png")}
				style={{
					height: 150,
					resizeMode: "contain",
					marginTop: hauteur * 0.05,
					color: "white",
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
				Merci pour achat !
			</Text>
		</View>
	);
};

export default SuccessScreen;

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
