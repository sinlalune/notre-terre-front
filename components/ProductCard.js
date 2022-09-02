import React from "react";
import * as Font from "expo-font";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Shadow } from "react-native-shadow-2";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const ProductName = require("./ProductName");
const ProducerInfo = require("../components/ProducerInfo");
const DomainInfo = require("../components/DomainInfo");
const ProductPriceQuantity = require("../components/ProductPriceQuantity");
const ProductAvaibility = require("../components/ProductAvaibility");
const ProductIcon = require("../components/productIcon");
const LikeIcon = require("../components/LikeIcon");
const AddIcon = require("../components/AddIcon");

import { Icon } from "@rneui/themed";

import { API_BACKEND } from "@env";

const ProductCard = (props) => {
  async function handleClickAddProduct() {
    await fetch(`https://back13007.herokuapp.com/card/productList`);
  }
  const navigation = useNavigation();
  //   console.log("productcardprops", props);
  const product = props;
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 5,
      }}
    >
      <Shadow distance={3}>
        <View
          style={{
            padding: 10,
            margin: 1,
            width: 165,
            height: 165,
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <ProductIcon icon_type={product.icon_type} />
            <AddIcon
              onPress={() => {
                handleClickAddProduct(props.product_id);
              }}
            />
            <LikeIcon />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Product", {
                  product_id: product.product_id,
                  screen: "Research",
                });
              }}
            >
              <View style={{ alignSelf: "flex-start" }}>
                <ProductName
                  name={product.name}
                  species={product.species}
                  label={product.label}
                  product_id={product.product_id}
                />
              </View>
            </TouchableOpacity>
            <View style={{ alignSelf: "flex-end" }}>
              <ProductPriceQuantity kilo_price={product.kilo_price} />
              <ProductAvaibility date_harvest={product.date_harvest} />
            </View>
          </View>
          <View>
            <DomainInfo
              domain_name={product.domain_name}
              product_id={product.product_id}
            />
          </View>
        </View>
      </Shadow>
    </View>
  );
};

module.exports = ProductCard;
