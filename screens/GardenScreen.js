const { useState, useEffect } = require("react");
const ProductName = require("../components/ProductName");
const ProductCard = require("../components/ProductCard");
const OrderCardMini = require("../components/OrderCardMini");
const OrderCard = require("../components/OrderCard");
const ProductIcon = require("../components/productIcon");
const LikeIcon = require("../components/LikeIcon");
const AddIcon = require("../components/AddIcon");

import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	ScrollView,
} from "react-native";
import { Shadow } from "react-native-shadow-2";

import { API_BACKEND } from "@env";

export default function GardenScreen() {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		(async () => {
			console.log("garden started");
			const loadProductList = await fetch(`${API_BACKEND}/card/productlist`);
			const response = await loadProductList.json();
			console.log("response", response.product);

			setProductList(response.product);
		})();
	}, []);

	console.log("liste des produits", productList);

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

	const OrderCardMiniList = productList.map((product, i) => {
		return (
			<OrderCardMini
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

	const OrderCardList = productList.map((product, i) => {
		return (
			<OrderCard
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

	return (
		<ScrollView style={{ backgroundColor: "white" }}>
			<View
				style={{
					flex: 1,
					flexWrap: "wrap",
					backgroundColor: "white",
					// justifyContent: "center",
					alignItems: "center",
					marginTop: 30,
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
					<View
						style={{
							flexDirection: "row",
							flexWrap: "wrap",
							width: "100%",
						}}
					>
						{OrderCardMiniList}
					</View>
					<View
						style={{
							flexDirection: "row",
							flexWrap: "wrap",
							width: "100%",
						}}
					>
						{OrderCardList}
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
