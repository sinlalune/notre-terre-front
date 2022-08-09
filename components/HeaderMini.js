import React from "react";
import * as Font from "expo-font";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

const largeur = Dimensions.get("window").width;
const hauteur = Dimensions.get("window").height;

const HeaderMini = () => {
	return (
		<View style={styles.header}>
			<Image
				source={require("../assets/logonotreterre.png")}
				style={{
					height: hauteur * 0.08,
					width: largeur * 0.2,
					marginRight: largeur * 0.02,
				}}
			/>
			<Text style={styles.logoText}>Notre Terre</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#0EA888",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: hauteur * 0.12,
	},
	logoText: {
		fontWeight: "bold",
		color: "white",
		fontSize: 24,
		fontFamily: "notoserif",
		marginTop: hauteur * 0.015,
		marginRight: largeur * 0.21,
	},
});

module.exports = HeaderMini;
