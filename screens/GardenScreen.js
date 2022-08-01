const { useState, useEffect } = require("react");
const { View } = require("react-native");
const productName = require("../components/productName");

function GardenScreen() {
  [productList, setProductList] = useState([]);

  useEffect(async (product) => {
    const load = async () => {
      const product_id = "62e7d11b98ac631e4375fc58";
      const loadProductList = await fetch("http://10.2.1.56:3000/product%22");
      const response = loadProductList.json;
      setProductList(response);
    };
  }, []);

  const product_id = "62e7d11b98ac631e4375fc58";

  const CardList = productList.map((product) => {
    return productName(product);
  });

  return <View>{CardList}</View>;
}