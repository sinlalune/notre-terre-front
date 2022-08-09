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

const ProductIcon = (product) => {
  //   const iconLoad = product.icon_type.toString();
  const iconprops = product.icon_type;

  console.log(product.icon_type);

  const icon_source = (iconLoad) => {
    if (iconLoad == "carotte") {
      return (
        <Image style={styles.icon} source={require("../assets/carotte.png")} />
      );
    } else if (iconLoad == "tomato") {
      return (
        <Image style={styles.icon} source={require("../assets/tomato.png")} />
      );
    } else if (iconLoad == "clementine") {
      return (
        <Image
          style={styles.icon}
          source={require("../assets/clementine.png")}
        />
      );
    } else if (iconLoad == "fraise") {
      return (
        <Image style={styles.icon} source={require("../assets/fraise.png")} />
      );
    }
  };
  console.log(icon_source);
  return <View>{icon_source(iconprops)}</View>;
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    marginTop: 5,
    marginRight: 5,
  },
});

module.exports = ProductIcon;
