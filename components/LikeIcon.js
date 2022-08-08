import React, { useState } from "react";
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
	const [isLiked, setIsLiked] = useState(false);
	// const loadFonts = async () => {
	//   await Font.loadAsync({
	//     Dosis: require("../assets/fonts/Dosis-VariableFont_wght.ttf"),
	//   });
	// };
	// loadFonts();
	// console.log("font loaded");
	return (
		<View>
			<Icon
				style={{ width: 30, height: 30, marginTop: 5, marginRight: 5 }}
				name="heart"
				type="font-awesome"
				color={isLiked ? "red" : "#ddded9"}
				onPress={() => {
					setIsLiked(!isLiked);
				}}
			/>
		</View>
	);
};

module.exports = LikeIcon;
