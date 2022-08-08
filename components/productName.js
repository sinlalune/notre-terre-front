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

const ProductName = (product) => {
	return (
		<View>
			<Text style={{ fontSize: 12, fontWeight: "bold", color: "#4f4e4d" }}>
				{product.name}
			</Text>
			<Text style={{ fontSize: 10, fontWeight: "300", color: "#4f4e4d" }}>
				{product.species}
			</Text>
			<Text style={{ fontSize: 10, fontWeight: "800", color: "#0CA789" }}>
				{product.label}
			</Text>
		</View>
	);
};

module.exports = ProductName;
