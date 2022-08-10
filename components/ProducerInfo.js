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
const { useState, useEffect } = require("react");

import { Icon } from "@rneui/themed";

import { API_BACKEND } from "@env";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const ProducerInfo = (product) => {
  const [producer, setProducer] = useState({});
  useEffect(() => {
    (async () => {
      console.log("producer started started");
      const loadProducerInfo = await fetch(
        `${API_BACKEND}/card/producer?producer_id=` + product.producer
      );
      const response = await loadProducerInfo.json();
      console.log("response producer info : ", response);
      setProducer(response.producer);
    })();
  }, []);

  let [fontsLoaded] = useFonts({
    Dosis: require("../assets/fonts/Dosis-Bold.ttf"),
    DosisBold: require("../assets/fonts/Dosis-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flexDirection: "row", marginTop: 5 }}>
      <Icon
        style={styles.icon}
        name="user"
        type="font-awesome"
        color="#0CA789"
      />
      <View style={{ marginTop: 5 }}>
        <Text style={{ fontSize: 8, fontWeight: "300", color: "#4f4e4d" }}>
          {producer.firstname}
        </Text>
        <Text
          style={{ fontSize: 12, fontFamily: "DosisBold", color: "#0CA789" }}
        >
          {producer.lastname}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    marginTop: 8,
    marginRight: 5,
  },
});

module.exports = ProducerInfo;
