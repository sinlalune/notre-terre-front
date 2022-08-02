const { useState, useEffect } = require("react");
const ProductName = require("../components/productName");
const ProductIcon = require("../components/productIcon");
const LikeIcon = require("../components/LikeIcon");
const AddIcon = require("../components/AddIcon");
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function GardenScreen() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      console.log("garden started");
      const loadProductList = await fetch("http://10.2.1.56:3000/product");
      const response = await loadProductList.json();
      console.log("response", response.product);

      setProductList(response.product);
    })();
  }, []);

  console.log("liste", productList);

  const CardList = productList.map((product, i) => {
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
              padding: 5,
              margin: 1,
              width: 160,
              height: 160,
              backgroundColor: "white",
              borderRadius: 5,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <ProductIcon />
              <AddIcon />
              <LikeIcon />
            </View>
            <View>
              <ProductName
                name={product.name}
                species={product.species_name}
                label={product.label}
              />
            </View>
          </View>
        </Shadow>
      </View>
    );
  });

  console.log("cardlist", CardList);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {CardList}
        </View>
      </View>
    </View>
  );
}
