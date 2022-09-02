const { useState, useEffect } = require("react");
const ProductName = require("../components/ProductName");
const ProductCard = require("../components/ProductCard");
const OrderCardMini = require("../components/OrderCardMini");
const OrderCard = require("../components/OrderCard");
const ProductIcon = require("../components/productIcon");
const LikeIcon = require("../components/LikeIcon");
const AddIcon = require("../components/AddIcon");
const HeaderMini = require("../components/HeaderMini");

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Modal,
  Pressable,
  Image,
  TouchableOpacity
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import React from 'react';
import {connect} from 'react-redux';

import { API_BACKEND } from "@env";

function GardenScreen(props) {
  const [orderList, setOrderList ] = useState([])
  const [filteredOrderList, setfilteredOrderList] = useState([]);

  const [productIdList, setIdList] = useState([])
  const [productList, setProductList] = useState([]);


  const [modalVisible, setModalVisible] = useState(false);
  const [modalProduct, setModalProduct] = useState({});

  const [seedingCount, setSeedingCount] = useState (0)
  const [growingCount, setGrowingCount] = useState (2)
  const [deliveryCount, setDeliveryCount] = useState (2)

  const navigation = props.navigation;

  const unfilterOrders = () => {  let ids = orderList.map((order)=>{
    return order.product
  })
  console.log('ids unfiltered', ids)
  setProductList(ids)
  console.log('unfilter')}

  const filterOrders = (filter) => {
    let filtered =orderList.filter(order => {
      return order.current_state === filter
    })
    setfilteredOrderList(filtered)
    console.log('filterorders', filteredOrderList )
    let ids = filteredOrderList.map((order)=>{
      return order.product
    })
    console.log('ids filtered', ids)
    setProductList(ids)

  }
  
  const userlog = props.userLogged._id
  console.log(userlog)

  // var stateCount = () => {
  //   for (let i=0; i<orderList.length; i+1) {
  //     console.log(orderList[i].current_state)
  //     if (orderList[i].current_state == 'Seeding'){
  //       setSeedingCount(seedingCount => seedingCount + 1)
  //     }
  //     else if (orderList[i].current_state == 'Growing'){
  //       setGrowingCount(growingCount => growingCount + 1)
  //     }
  //     else if (orderList[i].current_state == 'On delivery'){
  //       setDeliveryCount(deliveryCount => deliveryCount + 1)
  //     }
  //     console.log('loop', i)
  //   }}
 
  useEffect(() => {
    (async () => {
      console.log("garden started");
      const loadOrderList = await fetch(
        `https://back13007.herokuapp.com/card/orders?user_id=` + userlog
      );
      const response = await loadOrderList.json();
      console.log("response", response)

      setOrderList(response.orders);
      console.log('orders', orderList)
      let ids = orderList.map((order)=>{
        return order.product
      })
      console.log('ids', ids)
      setProductList(ids)
      // console.log("response", response.product);
      
      console.log('prod' , productList);
       setModalVisible(false);
    })();
  }, []);
  
  // stateCount();
  // console.log('seeding',seedingCount,'growing',growingCount,'delivery', deliveryCount)
 
  // console.log("liste des produits", productList);

  const OrderCardMiniList = productList.map((product, i) => {
    return (
      <TouchableOpacity
        key={i}
        onPress={() => {
          console.log("click détecté", modalVisible);
          setModalVisible(!modalVisible);
          setModalProduct(product);
        }}
      >
        <OrderCardMini
          key={i}
          name={product.name}
          species={product.species_name}
          label={product.label}
          kilo_price={product.kilo_price}
          date_harvest={product.date_harvest}
          producer={product.producer}
          domain_name={product.domain_name}
          domain_adress={product.domain_adress}
          product_id={product._id}
          icon_type={product.icon_type}
        />
      </TouchableOpacity>
    );
  });

  return (
    <View style={{ backgroundColor: "white" }}>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            marginTop: "60%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",

            // backgroundColor: "#BDC3C7",
          }}
        >
          <OrderCard
            name={modalProduct.name}
            species={modalProduct.species_name}
            label={modalProduct.label}
            kilo_price={modalProduct.kilo_price}
            date_harvest={modalProduct.date_harvest}
            producer={modalProduct.producer}
            domain_name={modalProduct.domain_name}
            domain_adress={modalProduct.domain_adress}
            product_id={modalProduct._id}
            navigation={navigation}
            icon_type={modalProduct.icon_type}
          />
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Image
              style={{
                marginTop: 60,
                width: 25,
                height: 25,
                alignSelf: "flex-end",
              }}
              source={require("../assets/remove.png")}
            />
          </TouchableOpacity>
        </View>
        
      </Modal>
      <HeaderMini />
      
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={ () => unfilterOrders()}>
        <Text
          style={{
            color: "#0CA789",
            // fontWeight: "800",
            fontSize: 30,
            fontFamily: "DosisBold",
          }}
        >
          Mon Jardin
        </Text>
        </TouchableOpacity>
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
          <TouchableOpacity onPress={() => filterOrders("Seeding")}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "DosisBold",
                fontSize: 40,
                marginRight: 10,
                color: "#696565",
              }}
            >
              {seedingCount}
            </Text>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/003-sesame.png")}
            />
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => filterOrders("Growing")}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "DosisBold",
                fontSize: 40,
                marginRight: 10,
                color: "#696565",
              }}
            >
              {growingCount}
            </Text>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/001-plant.png")}
            />
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => filterOrders("On delivery")}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "DosisBold",
                fontSize: 40,
                marginRight: 10,
                color: "#696565",
              }}
            >
              {deliveryCount}
            </Text>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/002-package.png")}
            />
          </View>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ backgroundColor: "white", paddingBottom: 600 }}>
          <View
            style={{
              flex: 1,
              flexWrap: "wrap",
              backgroundColor: "white",
              // justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                {OrderCardMiniList}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return { userLogged: state.user }
 }  

export default connect(mapStateToProps, null)(GardenScreen);