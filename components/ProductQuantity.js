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

const ProductQuantity = (product) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#0CA789",
        borderRadius: 3,
        padding: 6,
        alignContent: "center",
        justifyContent: "center",
        height: 30,
        margin: 1,
      }}
    >
      <Text style={{ fontWeight: "800", color: "white" }}>
        {product.kilo_price} €/kg
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
  },
});
module.exports = ProductQuantity;
