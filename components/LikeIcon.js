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
import { Icon } from "@rneui/themed";

const LikeIcon = (product) => {
	// const loadFonts = async () => {
	//   await Font.loadAsync({
	//     Dosis: require("../assets/fonts/Dosis-VariableFont_wght.ttf"),
	//   });
	// };
	// loadFonts();
	// console.log("font loaded");
	return (
		<View>
			<Icon style={styles.icon} name="heart" type="font-awesome" color="red" />
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

module.exports = LikeIcon;
