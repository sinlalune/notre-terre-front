const { useState, useEffect } = require("react");
const ProductName = require("../components/ProductName");
const ProductCard = require("../components/ProductCard");
const OrderCardMini = require("../components/OrderCardMini");
const OrderCard = require("../components/OrderCard");
const ProductIcon = require("../components/productIcon");
const LikeIcon = require("../components/LikeIcon");
const AddIcon = require("../components/AddIcon");
const HeaderMini = require("../components/HeaderMini");

import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	ScrollView,
	Modal,
	Pressable,
	Image,
} from "react-native";
import { Shadow } from "react-native-shadow-2";

import { API_BACKEND } from "@env";

export default function GardenScreen(props) {
	const [productList, setProductList] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [order, setOrder] = useState({});
	const navigation = props.navigation;

	useEffect(() => {
		(async () => {
			console.log("garden started");
			const loadProductList = await fetch(`${API_BACKEND}/card/productlist`);
			const response = await loadProductList.json();
			// console.log("response", response.product);

			setProductList(response.product);
			setOrder(response.product[0]);
			setModalVisible(false);
		})();
	}, []);

	// console.log("liste des produits", productList);

	const OrderCardMiniList = productList.map((product, i) => {
		return (
			<Pressable
				key={i}
				onPress={() => {
					console.log("click détecté", modalVisible);
					setModalVisible(!modalVisible);
				}}
			>
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
					icon_type={product.icon_type}
				/>
			</Pressable>
		);
	});

	return (
		<View style={{ backgroundColor: "white" }}>
			<Modal
				animationType="fade"
				transparent={false}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<View
					style={{
						marginTop: "60%",
						alignSelf: "center",
						justifyContent: "center",
						alignItems: "center",

						// backgroundColor: "#BDC3C7",
					}}
				>
					<OrderCard
						name={order.name}
						species={order.species_name}
						label={order.label}
						kilo_price={order.kilo_price}
						date_harvest={order.date_harvest}
						producer={order.producer}
						domain_name={order.domain_name}
						domain_adress={order.domain_adress}
						product_id={order._id}
						navigation={navigation}
						icon_type={order.icon_type}
					/>
					<Pressable onPress={() => setModalVisible(!modalVisible)}>
						<Image
							style={{
								marginTop: 60,
								width: 25,
								height: 25,
								alignSelf: "flex-end",
							}}
							source={require("../assets/remove.png")}
						/>
					</Pressable>
				</View>
			</Modal>
			<HeaderMini />
			<View
				style={{
					marginTop: 20,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text
					style={{
						color: "#0CA789",
						// fontWeight: "800",
						fontSize: 30,
						fontFamily: "DosisBold",
					}}
				>
					Mon Jardin
				</Text>
				<View
					style={{
						flexDirection: "row",
						width: "90%",
						justifyContent: "space-between",
						marginLeft: "5%",
						marginBottom: "-2%",
						marginTop: "5%",
						zIndex: 1000,
					}}
				>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text
							style={{
								fontFamily: "DosisBold",
								fontSize: 40,
								marginRight: 10,
								color: "#696565",
							}}
						>
							4
						</Text>
						<Image
							style={{ width: 40, height: 40 }}
							source={require("../assets/003-sesame.png")}
						/>
					</View>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text
							style={{
								fontFamily: "DosisBold",
								fontSize: 40,
								marginRight: 10,
								color: "#696565",
							}}
						>
							2
						</Text>
						<Image
							style={{ width: 40, height: 40 }}
							source={require("../assets/001-plant.png")}
						/>
					</View>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text
							style={{
								fontFamily: "DosisBold",
								fontSize: 40,
								marginRight: 10,
								color: "#696565",
							}}
						>
							5
						</Text>
						<Image
							style={{ width: 40, height: 40 }}
							source={require("../assets/002-package.png")}
						/>
					</View>
				</View>

				<ScrollView style={{ backgroundColor: "white", paddingBottom: 600 }}>
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
								{OrderCardMiniList}
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
