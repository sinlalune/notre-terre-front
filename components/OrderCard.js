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
import { Shadow } from "react-native-shadow-2";
const ProductName = require("./ProductName");
const ProducerInfo = require("../components/ProducerInfo");
const DomainInfo = require("../components/DomainInfo");
const ProductPriceQuantity = require("../components/ProductPriceQuantity");
const ProductAvaibility = require("../components/ProductAvaibility");
const ProductIcon = require("../components/productIcon");
const LikeIcon = require("../components/LikeIcon");
const AddIcon = require("../components/AddIcon");

import { Icon } from "@rneui/themed";

const OrderCard = (product, i) => {
  return (
    <View
      key={i}
      style={{
        flexDirection: "row",
        padding: 5,
      }}
    >
      <Shadow distance={3} key={i}>
        <View
          key={i}
          style={{
            padding: 20,
            margin: 1,
            width: 340,
            height: 200,
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ alignSelf: "flex-start", flexDirection: "row" }}>
              <ProductIcon />
              <ProductName
                name={product.name}
                species={product.species}
                label={product.label}
              />
            </View>
            <View style={{ alignSelf: "flex-end" }}>
              <ProductPriceQuantity kilo_price={product.kilo_price} />
              <ProductAvaibility date_harvest={product.date_harvest} />
            </View>
          </View>
          <View
            style={{
              padding: 20,
              margin: 1,
              width: 340,
              height: 30,
            }}
          ></View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ alignSelf: "flex-start" }}>
              <ProducerInfo producer={product.producer} />
            </View>
            <View style={{ alignSelf: "flex-end" }}>
              <DomainInfo
                domain_name={product.domain_name}
                product_id={product.product_id}
              />
            </View>
          </View>
        </View>
      </Shadow>
    </View>
  );
};

module.exports = OrderCard;
