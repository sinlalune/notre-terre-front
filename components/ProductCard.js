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

import { API_BACKEND } from "@env";

const ProductCard = (product, i) => {
  async function handleClickAddProduct() {
    await fetch(`${API_BACKEND}/card/productList`);
  }

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
            padding: 10,
            margin: 1,
            width: 165,
            height: 165,
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <ProductIcon icon_type={product.icon_type} />
            <AddIcon
              onPress={() => {
                handleClickAddProduct(props.product_id);
              }}
            />
            <LikeIcon />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ alignSelf: "flex-start" }}>
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
          <View>
            <DomainInfo
              domain_name={product.domain_name}
              product_id={product.product_id}
            />
          </View>
        </View>
      </Shadow>
    </View>
  );
};

module.exports = ProductCard;
