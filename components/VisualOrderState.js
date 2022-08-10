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
import * as Progress from "react-native-progress";

import { Icon } from "@rneui/themed";
import { BackgroundImage } from "@rneui/base";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const VisualOrderState = (product) => {
  let [fontsLoaded] = useFonts({
    Dosis: require("../assets/fonts/Dosis-Bold.ttf"),
    DosisBold: require("../assets/fonts/Dosis-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{ justifyContent: "center", margin: 10 }}>
      <View style={{ justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            justifyContent: "space-between",
            marginLeft: "5%",
            marginBottom: "-2%",
            marginTop: "5%",
            zIndex: 1000,
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/003-sesame.png")}
          />
          <Image
            style={styles.icon}
            source={require("../assets/001-plant.png")}
          />
          <Image
            style={styles.icon}
            source={require("../assets/002-package.png")}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          backgroundColor: "#FFF4E6",
          borderRadius: 5,
          width: "80%",
          height: 40,
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <View>
          <Progress.Bar
            progress={1}
            width={100}
            borderColor={"grey"}
            color={"#DAF7A6"}
            style={{ marginTop: 15, marginLeft: "5%" }}
          />
        </View>
        <View>
          <Progress.Bar
            progress={0.3}
            width={100}
            borderColor={"grey"}
            color={"#DAF7A6"}
            style={{ marginTop: 15, marginLeft: "5%" }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 15,
          alignSelf: "center",
          backgroundColor: "#BDC3C7",
          borderRadius: 5,
          width: 80,
          height: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontFamily: "DosisBold",
            fontSize: 14,
          }}
        >
          En livraison
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});

module.exports = VisualOrderState;
