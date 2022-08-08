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
import { Shadow } from "react-native-shadow-2";
const ProductName = require("./ProductName");
const ProducerInfo = require("../components/ProducerInfo");
const DomainInfo = require("../components/DomainInfo");
const ProductPriceQuantity = require("../components/ProductPriceQuantity");
const ProductAvaibility = require("../components/ProductAvaibility");
const ProductIcon = require("../components/productIcon");
const LikeIcon = require("../components/LikeIcon");
const AddIcon = require("../components/AddIcon");

import { Icon } from "@rneui/themed";

const OrderCardMini = (product, i) => {
	return (
		<View
			key={i}
			style={{
				flexDirection: "row",
				padding: 5,
			}}
		>
			<Shadow distance={3} key={i}>
				<View
					key={i}
					style={{
						padding: 10,
						margin: 1,
						width: 105,
						height: 105,
						backgroundColor: "white",
						borderRadius: 5,
					}}
				>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							marginBottom: 10,
							marginTop: 5,
						}}
					>
						<ProductIcon />
					</View>
					<View style={{ justifyContent: "center", alignItems: "center" }}>
						<View style={{ alignSelf: "center" }}>
							<ProductAvaibility date_harvest={product.date_harvest} />
						</View>
					</View>
				</View>
			</Shadow>
		</View>
	);
};

module.exports = OrderCardMini;
