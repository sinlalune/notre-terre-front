import React, { useEffect, useState } from "react";
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

const AddIcon = (product) => {
	const [isAdded, setIsAdded] = useState(false);

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
				name="plus"
				type="font-awesome"
				color={isAdded ? "#0EA888" : "#ddded9"}
				onPress={() => {
					setIsAdded(!isAdded);
				}}
			/>
		</View>
	);
};

module.exports = AddIcon;
