//Import of React
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

//Import of MapView and Marker
import MapView, { Marker } from "react-native-maps";

// Import Input
import { Input, Button } from "react-native-elements";

// Import of ScrollView
import { ScrollView } from "react-native";

//Import of components for Location and Permissions
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

// Import of Icons
import { Ionicons } from "@expo/vector-icons";

const ProductCard = require("../components/ProductCard");


// ASKS PERMISSIONS FOR LOCALISATION
export default function ResearchScreen() {
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);

  useEffect(() => {
    async function askPermissions() {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 2 }, (location) => {
          setCurrentLatitude(location.coords.latitude);
          setCurrentLongitude(location.coords.longitude);
        });
      }
    }
    askPermissions();
  }, []);

  console.log("This is the user position", currentLatitude, currentLongitude);


  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      console.log("🤖 research page started");
      const loadProductList = await fetch("http://10.2.1.56:3000/product");
      const response = await loadProductList.json();
      console.log("response", response.product);

      setProductList(response.product);
    })();
  }, []);

  console.log("liste", productList);

  const CardList = productList.map((product, i) => {
    return (
      <ProductCard
        key={i}
        name={product.name}
        species={product.species_name}
        label={product.label}
        price = {product.kilo_price}
        domain={product.domain_adress}
      />
    );
  });

  console.log("cardlist", CardList);


  const [listPOI, setListPoi] = useState([]);

  var markerPOI = listPOI.map((POI, i) => {
    return <Marker key={i} pinColor="blue" coordinate={{ latitude: POI.latitude, longitude: POI.longitude }}
      title={POI.titre}
      description={POI.description}
    />
  });
  

  return (
    <>
      <Input
        containerStyle={{ marginBottom: 10, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Fraise, Paris ..."
      />

      <MapView
        style={{ flex: 1, marginLeft: 10, marginRight: 10 }}
        region={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: currentLatitude,
            longitude: currentLongitude,
          }}
          title="Your Position"
          description="You are here"
        />
        {markerPOI}
      </MapView>
      <ScrollView style={{ marginTop: 10, flex: 3 }}>
        {CardList}
      </ScrollView>
    </>
  );
}
