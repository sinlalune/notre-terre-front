import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import { Button } from "react-native-elements";

import { FontAwesome5 } from "@expo/vector-icons";

import { DataTable } from "react-native-paper";

export default function BasketScreen() {
	const [cart, setCart] = useState([]);
	const [addedToCart, setAddedToCart] = useState(false);

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
					Mon Panier{" "}
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
				<DataTable.Header>
					<DataTable.Title>Type</DataTable.Title>
					<DataTable.Title>Produit</DataTable.Title>
					<DataTable.Title>Prix Unitaire</DataTable.Title>
					<DataTable.Title numeric>Quantité</DataTable.Title>
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

/*
      <Text>Your Order:</Text>
      <%if(dataCardPaint.length <1){ %>
        <Text>No article in the basket</Text>
     <% } else{ %>

    
      <View>
        <Table>
            <Table.head>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Picture</th>
                <th scope="col">Month</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <% 
              var totalCmd=0
              for (let i=0; i<dataCardPaint.length; i++){ 
                %>
              <tr class="basket-item">
                <th scope="row">#<%= i %></th>
                <td><img src=<%= dataCardPaint[i].url %> class="basket-img"></td>
                <td>
                  <%= dataCardPaint[i].name %>
                </td>
                <td>
                    <form action="/update-shop" method="POST">
                        <input type="hidden" name="position" value="<%=i%>">
                        <input type="text" name="quantity" value="<%= dataCardPaint[i].quantity %>">
                        <button class="btn btn-outline-info btn-sm" name="button"><i class="fas fa-sync-alt"></i></button>
                    </form>
                </td>
                <td><%= dataCardPaint[i].price %>€</td>
                <td><%= dataCardPaint[i].price * dataCardPaint[i].quantity %>€</td>
                <td><a href="/delete-shop?position=<%=i%>"><button class="btn btn-outline-info btn-sm" name="button"><i class="far fa-trash-alt"></i></button></a></td>
              </tr>
<%
totalCmd = dataCardPaint[i].price * dataCardPaint[i].quantity + totalCmd;

} %>

              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td class="total-box">Total Basket : </td>
                  <td><%= totalCmd %>€</td>
                
                <td></td>
              </tr>
            </tbody>
        </table>
    </div>
    <div class="row">
        <div class="col-12 text-right">
          <form action="/create-checkout-session" method="POST">
            <button type="submit" id="checkout-button" class="btn btn-outline-info btn-sm btn-checkout" name="button-checkout">Checkout</button>
          </form>
        </div>
    </div>
    <% } %> 
*/
