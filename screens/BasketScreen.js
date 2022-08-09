import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import { Button } from "react-native-elements";

import { FontAwesome5 } from "@expo/vector-icons";

import { DataTable } from "react-native-paper";

export default function BasketScreen(props) {
	return (
		<>
			<View
				style={{
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#0EA888",
					marginBottom: 15,
				}}
			>
				<View
					style={{
						marginBottom: 25,
					}}
				/>
				<Text style={styles.logoText}>
					Mon Panier
					<Image
						style={styles.logoImg}
						source={require("../assets/logonotreterre.png")}
					/>
				</Text>
			</View>
			<Text
				style={{
					marginTop: 50,
				}}
			>
				Récapitulatif
			</Text>
			<DataTable
				style={{
					marginBottom: 70,
				}}
			>
				<DataTable.Header style={{ textAlign: "space-between" }}>
					<DataTable.Title>Type</DataTable.Title>
					<DataTable.Title>Produit</DataTable.Title>
					<DataTable.Title>Prix Unitaire</DataTable.Title>
					<DataTable.Title numeric>Qantité</DataTable.Title>
					<DataTable.Title numeric>Prix</DataTable.Title>
				</DataTable.Header>

				<DataTable.Row>
					<DataTable.Cell>
						<Image
							style={{
								width: 20,
								height: 20,
								resizeMode: "contain",
							}}
							source={require("../assets/fruit.png")}
						/>
					</DataTable.Cell>
					<DataTable.Cell>Fraise</DataTable.Cell>
					<DataTable.Cell>9€/kg</DataTable.Cell>
					<DataTable.Cell>2</DataTable.Cell>
					<DataTable.Cell numeric>18€</DataTable.Cell>
				</DataTable.Row>

				<DataTable.Row>
					<DataTable.Cell>
						<Image
							style={{
								width: 20,
								height: 20,
								resizeMode: "contain",
							}}
							source={require("../assets/vegie1.png")}
						/>
					</DataTable.Cell>
					<DataTable.Cell>Petit Pois</DataTable.Cell>
					<DataTable.Cell>5,5€/kg</DataTable.Cell>
					<DataTable.Cell>3</DataTable.Cell>
					<DataTable.Cell numeric>16,5€</DataTable.Cell>
				</DataTable.Row>

				<DataTable.Row>
					<DataTable.Cell>
						<Image
							style={{
								width: 20,
								height: 20,
								resizeMode: "contain",
							}}
							source={require("../assets/vegie2.png")}
						/>
					</DataTable.Cell>
					<DataTable.Cell>Carotte</DataTable.Cell>
					<DataTable.Cell>1,8€/kg</DataTable.Cell>
					<DataTable.Cell>1</DataTable.Cell>
					<DataTable.Cell numeric>1,8€</DataTable.Cell>
				</DataTable.Row>

				<DataTable.Row
					style={{
						backgroundColor: "#0EA888",
						borderRadius: 10,
					}}
				>
					<DataTable.Cell
						style={{
							justifyContent: "flex-start",
						}}
					>
						Total:
					</DataTable.Cell>
					<DataTable.Cell
						style={{
							justifyContent: "flex-end",
						}}
					>
						36,3€
					</DataTable.Cell>
				</DataTable.Row>
			</DataTable>
			<Button
				buttonStyle={{
					backgroundColor: "#0EA888",
					borderRadius: 10,
					color: "#FFFFFF",
					width: "50%",
					marginLeft: "25%",
				}}
				title="   Payer"
				icon={<FontAwesome5 name="money-check" size={24} color="white" />}
				onPress={() => props.navigation.navigate("Success")}
			></Button>
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
	logoImg: {
		width: 25,
		height: 10,
		marginLeft: 10,
	},
});
