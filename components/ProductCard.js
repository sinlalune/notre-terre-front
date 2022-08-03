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
const ProductName = require("../components/productName");
const ProductQuantity = require("../components/ProductQuantity");
const ProductAvaibility = require("../components/ProductAvaibility");
const ProductIcon = require("../components/productIcon");
const LikeIcon = require("../components/LikeIcon");
const AddIcon = require("../components/AddIcon");

import { Icon } from "@rneui/themed";

const ProductCard = (product, i) => {
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
            padding: 5,
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
              justifyContent: "space-around",
            }}
          >
            <ProductIcon />
            <AddIcon />
            <LikeIcon />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <ProductName
              name={product.name}
              species={product.species}
              label={product.label}
            />
            <View>
              <ProductQuantity kilo_price={product.kilo_price} />
              <ProductAvaibility date_harvest={product.date_harvest} />
            </View>
          </View>
        </View>
      </Shadow>
    </View>
  );
};

module.exports = ProductCard;
