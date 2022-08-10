import React from "react";
import * as Font from "expo-font";
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native";
const { useState, useEffect } = require("react");

import { API_BACKEND } from "@env";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { Icon } from "@rneui/themed";

import { useNavigation } from "@react-navigation/native";

const DomainInfo = (product) => {
	const testAdress = { lat: 43.293112, lon: 5.37023 };
	const navigation = useNavigation();

	function degreesToRadians(degrees) {
		return (degrees * Math.PI) / 180;
	}

	function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
		var earthRadiusKm = 6371;

		var dLat = degreesToRadians(lat2 - lat1);
		var dLon = degreesToRadians(lon2 - lon1);

		lat1 = degreesToRadians(lat1);
		lat2 = degreesToRadians(lat2);

		var a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return earthRadiusKm * c;
	}

	const [domain_adress, setAdress] = useState({});
	useEffect(() => {
		(async () => {
			console.log("producer adrress started");
			const loadProductInfo = await fetch(
				`${API_BACKEND}/card/product?product_id=` + product.product_id
			);
			const response = await loadProductInfo.json();
			// console.log("response product adress : ", response.product.domain_adress);
			setAdress(response.product.domain_adress[0]);
		})();
	}, []);

	const distance = Math.floor(
		distanceInKmBetweenEarthCoordinates(
			testAdress.lat,
			testAdress.lon,
			domain_adress.lat,
			domain_adress.lon
		)
	);

	let [fontsLoaded] = useFonts({
		Dosis: require("../assets/fonts/Dosis-Bold.ttf"),
		DosisBold: require("../assets/fonts/Dosis-ExtraBold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	// console.log("adress_comp", domain_adress.lat, domain_adress.lon);
	return (
		<View
			style={{
				flexDirection: "row",
				marginTop: 5,
				// alignContent: "center",
				justifyContent: "space-between",
			}}
		>
			<View>
				<Image style={styles.icon} source={require("../assets/pin.png")} />
			</View>
			<View style={{ marginTop: 5, marginRight: 10 }}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Producer");
					}}
				>
					<Text style={{ fontSize: 8, fontWeight: "300", color: "#4f4e4d" }}>
						Domaine
					</Text>
					<Text
						style={{ fontSize: 12, fontFamily: "DosisBold", color: "#0CA789" }}
					>
						{product.domain_name}
					</Text>
				</TouchableOpacity>
			</View>

			<View
				style={{
					marginTop: 5,
					flexDirection: "row",
					backgroundColor: "#0CA789",
					borderRadius: 3,
					padding: 6,
					// alignContent: "center",
					// justifyContent: "center",
					height: 25,
					margin: 1,
					alignSelf: "flex-end",
				}}
			>
				<Text style={{ fontSize: 12, fontFamily: "DosisBold", color: "white" }}>
					{distance} Km
				</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	icon: {
		width: 15,
		height: 15,
		marginTop: 5,
		marginRight: 1,
	},
});

module.exports = DomainInfo;
