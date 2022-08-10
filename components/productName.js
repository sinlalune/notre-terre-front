import React from "react";
import * as Font from "expo-font";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Icon } from "@rneui/themed";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const ProductName = (product) => {
  let [fontsLoaded] = useFonts({
    Dosis: require("../assets/fonts/Dosis-Bold.ttf"),
    DosisBold: require("../assets/fonts/Dosis-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <View>
        <Text
          style={{ fontSize: 13, fontFamily: "DosisBold", color: "#868686" }}
        >
          {product.name}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "300",
            color: "#4f4e4d",
            fontStyle: "italic",
          }}
        >
          {product.species}
        </Text>
        <Text
          style={{ fontSize: 15, fontFamily: "DosisBold", color: "#0CA789" }}
        >
          {product.label}
        </Text>
      </View>
    </View>
  );
};

module.exports = ProductName;
