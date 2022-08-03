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

const ProductAvaibility = (product) => {
  const harvest = new Date("09/06/2022");

  let today = new Date();
  console.log("harvest", harvest, "today", today);
  const difference = harvest - today;
  const availability = Math.floor(difference / (1000 * 60 * 60 * 24));
  console.log(difference, availability);

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
        ~ {availability} J
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
module.exports = ProductAvaibility;
