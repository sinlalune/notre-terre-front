const { useState, useEffect } = require("react");
const ProductName = require("../components/ProductName");
const ProductCard = require("../components/ProductCard");
const OrderCardMini = require("../components/OrderCardMini");
const OrderCard = require("../components/OrderCard");
const ProductIcon = require("../components/productIcon");
const LikeIcon = require("../components/LikeIcon");
const AddIcon = require("../components/AddIcon");
const ProductPriceQuantity = require("../components/ProductPriceQuantity");
const ProductAvaibility = require("../components/ProductAvaibility");
const DomainInfo = require("../components/DomainInfo");
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Modal,
  Pressable,
  Image,
} from "react-native";
import { Shadow } from "react-native-shadow-2";

import { API_BACKEND } from "@env";

export default function GardenScreen(props) {
  const [product, setProduct] = useState({});
  const [producer, setProducer] = useState({});

  useEffect(() => {
    (async () => {
      console.log("product page start");
      console.log("product :", props.route.params.product_id);
      const loadProductInfo = await fetch(
        `${API_BACKEND}/card/product?product_id=` +
          props.route.params.product_id
      );
      const response = await loadProductInfo.json();
      console.log("product : ", response.product);
      setProduct(response.product);
      setProducer(response.product.producer);
    })();
  }, []);

  return (
    <ScrollView>
      <View style={{ backgroundColor: "white", marginBottom: 20 }}>
        <View
          style={{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "#0CA789", fontWeight: "800", fontSize: 60 }}>
            {product.name}
          </Text>
          <Text style={{ fontSize: 50, fontWeight: "300", color: "#4f4e4d" }}>
            {product.species_name}
          </Text>
          <Text style={{ fontSize: 50, fontWeight: "800", color: "#0CA789" }}>
            {product.label}
          </Text>
          <Image
            style={{ height: 50, width: 50 }}
            source={require("../assets/tomato.png")}
          />

          <View
            style={{
              flexDirection: "row",
              margin: 20,
            }}
          >
            <ProductPriceQuantity kilo_price={product.kilo_price} />
            <ProductAvaibility date_harvest={product.date_harvest} />
          </View>

          <Text
            style={{
              fontSize: 15,
              fontWeight: "200",
              color: "grey",
              padding: 20,
              fontStyle: "italic",
            }}
          >
            Un légume est la plante ou une partie comestible d'une espèce
            potagère. Cette définition, reprise par la plupart des dictionnaires
            de langue française, peut être étendue aux champignons comestibles,
            dont certains sont cultivés (champignon de Paris, shiitaké, etc.) et
            à certaines algues, dont la consommation est la plus développée en
            Extrême-Orient.
          </Text>
        </View>
        <View style={{ backgroundColor: "#0CA789", padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../assets/pin.png")}
            />

            <View>
              <Text style={{ fontSize: 30, fontWeight: "300", color: "white" }}>
                Domaine
              </Text>
              <Text style={{ color: "white", fontWeight: "800", fontSize: 30 }}>
                {product.domain_name}
              </Text>
            </View>
          </View>
          <Text style={{ color: "white", fontWeight: "800", fontSize: 30 }}>
            {producer.firstname}
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "300", color: "white" }}>
            {producer.lastname}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "300",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Un verger est un espace de terrain dévolu à la culture d'arbres
            fruitiers, appelée arboriculture fruitière. Il en existe différents
            types : les vergers conservatoires, les prés-vergers, les vergers
            commerciaux et de jardin potager.
          </Text>
          <Pressable
            onPress={() =>
              props.navigation.navigate("BottomNavigator", {
                screen: props.screen,
              })
            }
          >
            <View
              style={{
                backgroundColor: "white",
                width: 100,
                borderRadius: 5,
                alignSelf: "center",
                margin: 20,
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "400",
                  color: "#0CA789",
                  alignSelf: "center",
                }}
              >
                En savoir +
              </Text>
            </View>
          </Pressable>
        </View>

        <Pressable
          onPress={() =>
            props.navigation.navigate("BottomNavigator", {
              screen: props.screen,
            })
          }
        >
          <View
            style={{
              backgroundColor: "white",
              width: 100,
              borderRadius: 5,
              alignSelf: "center",
              margin: 20,
              padding: 10,
              marginBottom: 0,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: "#0CA789",
                alignSelf: "center",
              }}
            >
              Retour
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}
