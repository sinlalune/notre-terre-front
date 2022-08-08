import React from "react";
import * as Font from "expo-font";
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	TextInput,
} from "react-native";
import { Icon } from "react-native-elements";

const Header = () => {
	// const loadFonts = async () => {
	//   await Font.loadAsync({
	//     Dosis: require("../assets/fonts/Dosis-VariableFont_wght.ttf"),
	//   });
	// };
	// loadFonts();
	// console.log("font loaded");

	return (
		<View
			style={{
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: (windowHeight * 1) / 3,
			}}
		>
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
	);
};

const styles = StyleSheet.create({
	icon: {
		width: 30,
		height: 30,
		marginTop: 5,
		marginRight: 5,
	},
});

module.exports = AddIcon;
