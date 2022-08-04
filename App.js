import { LogBox } from "react-native";
LogBox.ignoreLogs([""]);

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Import of React
import React from "react";

//Import of Navigation Component
import { NavigationContainer } from "@react-navigation/native";

//Import and set-up of Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import and set-up of Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Import of Icons
import { Ionicons } from "@expo/vector-icons";

//Import of all Screens
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

import ProducerScreen from "./screens/ProducerScreen";
import BasketScreen from "./screens/BasketScreen";
import GardenScreen from "./screens/GardenScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const store = createStore(combineReducers({NAME OF REDUCER}));

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == "Garden") {
            iconName = "leaf";
          } else if (route.name == "Research") {
            iconName = "ios-search-sharp";
          } else if (route.name == "Basket") {
            iconName = "basket";
          }

<<<<<<< HEAD
					return <Ionicons name={iconName} size={25} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: "#000000",
				inactiveTintColor: "#FFFFFF",
				style: {
					backgroundColor: "#0CA789",
				},
			}}
		>
			<Tab.Screen name="Research" component={ResearchScreen} />
			<Tab.Screen name="Garden" component={GardenScreen} />
			<Tab.Screen name="Basket" component={BasketScreen} />
		</Tab.Navigator>
	);
};

export default function App() {
	return (
		// <Provider store={store}>
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Profile" component={ProfileScreen} />
				<Stack.Screen name="Producer" component={ProducerScreen} />
				<Stack.Screen name="BottomNavigator" component={BottomNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
		// </Provider>
	);
=======
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#000000",
        inactiveTintColor: "#FFFFFF",
        style: {
          backgroundColor: "#0CA789",
        },
      }}
    >
      <Tab.Screen name="Garden" component={GardenScreen} />

      <Tab.Screen name="Basket" component={BasketScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Garden" component={GardenScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Producer" component={ProducerScreen} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
>>>>>>> card
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
