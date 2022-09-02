import React from "react";
import * as Font from "expo-font";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

const hauteur = Dimensions.get("window").height;

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.logoText}>Notre Terre</Text>
			<Text style={styles.tagLineText}>
				Vous aussi, invitez les meilleurs aliments dans votre cuisine
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#0EA888",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: 100,
		fontFamily: "Dosis"
	
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
});

module.exports = Header;
