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
import { Icon } from "react-native-elements";

const AddIcon = (product) => {
  // const loadFonts = async () => {
  //   await Font.loadAsync({
  //     Dosis: require("../assets/fonts/Dosis-VariableFont_wght.ttf"),
  //   });
  // };
  // loadFonts();
  // console.log("font loaded");
  return (
    <View>
      <Icon
        style={styles.icon}
        name="plus"
        type="font-awesome"
        color="#0CA789"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    marginTop: 5,
    marginRight: 5,
  },
});

module.exports = AddIcon;
