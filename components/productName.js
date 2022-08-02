import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";

const productName = (product) => {
  // useFonts({
  //   Dosis: require("../assets/fonts/Dosis.ttf"),
  // });
  return (
    <View style={styles.tag}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.species}>{product.species}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontFamily: "Dosis",
    fontWeight: "bold",
  },
  species: {
    fontFamily: "Dosis",
    fontWeight: "light",
  },
});

module.exports = productName;
