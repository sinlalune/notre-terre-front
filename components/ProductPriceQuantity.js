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

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const ProductPriceQuantity = (product) => {
  let [fontsLoaded] = useFonts({
    Dosis: require("../assets/fonts/Dosis-Bold.ttf"),
    DosisBold: require("../assets/fonts/Dosis-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
      <Image
        style={styles.icon}
        source={require("../assets/weight-kilo.png")}
      />
      <Text style={{ fontSize: 12, fontFamily: "DosisBold", color: "white" }}>
        {product.kilo_price} €/kg
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
});
module.exports = ProductPriceQuantity;
