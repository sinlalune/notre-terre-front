//Import of React
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { API_BACKEND } from "@env";

//Import of MapView and Marker
import MapView, { Marker } from "react-native-maps";

// Import Input
import { Input, Button } from "react-native-elements";
import { connect } from "react-redux";

//Import of components for Location and Permissions
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import of Icons
import { Ionicons } from "@expo/vector-icons";

const ProductCard = require("../components/ProductCard");

// ASKS PERMISSIONS FOR LOCALISATION
export function ResearchScreen(props) {
	const [currentLatitude, setCurrentLatitude] = useState(0);
	const [currentLongitude, setCurrentLongitude] = useState(0);
	useEffect(() => {
		async function askPermissions() {
			let { status } = await Permissions.askAsync(Permissions.LOCATION);
			if (status === "granted") {
				Location.watchPositionAsync({ distanceInterval: 2 }, (location) => {
					setCurrentLatitude(location.coords.latitude);
					setCurrentLongitude(location.coords.longitude);
				});
			}
		}
		askPermissions();
	}, []);

	console.log("This is the user position", currentLatitude, currentLongitude);

	const [productList, setProductList] = useState([]);

	useEffect(() => {
		(async () => {
			console.log("🤖 research page started");
			const loadProductList = await fetch(`${API_BACKEND}/card/productList`);
			const response = await loadProductList.json();
			console.log("response", response.product);

			setProductList(response.product);
		})();
	}, []);

	console.log("liste", productList);

	const CardList = productList.map((product, i) => {
		return (
			<ProductCard
				key={i}
				name={product.name}
				species={product.species_name}
				label={product.label}
				kilo_price={product.kilo_price}
				date_harvest={product.date_harvest}
				producer={product.producer}
				domain_name={product.domain_name}
				domain_adress={product.domain_adress}
				product_id={product._id}
			/>
		);
	});

	console.log("cardlist", CardList);

	const [locAgri, setLocAgri] = useState([]);

	var markerPOI = productList.map((product, i) => {
		return (
			<Marker
				key={i}
				pinColor="#0EA888"
				coordinate={{
					latitude: product.domain_adress[0].lat,
					longitude: product.domain_adress[0].lon,
				}}
				title={product.name}
				description={product.domain_name}
			/>
		);
	});

	return (
		<>
			<View
				style={{
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text style={styles.logoText}>Ma Recherche</Text>
				<Text style={styles.tagLineText}>
					Vous aussi, invitez les meilleurs aliments dans votre cuisine
				</Text>
			</View>
			<Input
				containerStyle={{ marginBottom: 10, width: "70%" }}
				inputStyle={{ marginLeft: 10 }}
				placeholder="Fraise, Paris ..."
			/>

			<MapView
				style={{ flex: 1, marginLeft: 10, marginRight: 10 }}
				region={{
					latitude: currentLatitude,
					longitude: currentLongitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				<Marker
					coordinate={{
						latitude: currentLatitude,
						longitude: currentLongitude,
					}}
					title="Your Position"
					description="You are here"
				/>
				{markerPOI}
			</MapView>
			<ScrollView style={{ marginTop: 10, flex: 3 }}>
				<View
					style={{
						flex: 1,
						flexWrap: "wrap",
						backgroundColor: "white",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<View>
						<View
							style={{
								flexDirection: "row",
								flexWrap: "wrap",
								width: "100%",
							}}
						>
							{CardList}
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	logoText: {
		fontWeight: "bold",
		color: "white",
		fontSize: 35,
		fontFamily: "notoserif",
		backgroundColor: "#0EA888",
	},
	tagLineText: {
		color: "white",
		fontSize: 12,
		textAlign: "center",
		marginTop: 5,
		fontStyle: "italic",
		backgroundColor: "#0EA888",
		marginBottom: 10,
	},
});

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps, null)(ResearchScreen);
