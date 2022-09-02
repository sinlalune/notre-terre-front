import React from "react";
import * as Font from "expo-font";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const largeur = Dimensions.get("window").width;
const hauteur = Dimensions.get("window").height;

const HeaderMini = () => {
  let [fontsLoaded] = useFonts({
    Dosis: require("../assets/fonts/Dosis-Bold.ttf"),
    DosisBold: require("../assets/fonts/Dosis-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>Notre Terre</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0EA888",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: hauteur * 0.12,
  },
  logoText: {
    color: "white",
    fontSize: 24,
    fontFamily: "DosisBold",
    marginTop : 20
 
  },
});

module.exports = HeaderMini;
