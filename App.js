import { LogBox } from "react-native";
LogBox.ignoreLogs([""]);

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Import of React
import React from "react";

//Import of store
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

//Import of Navigation Component
import { NavigationContainer } from "@react-navigation/native";

//Import and set-up of Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import and set-up of Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Import of Icons
import { Ionicons } from "@expo/vector-icons";

//Import of Custom Fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

//Import of all Screens
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProducerScreen from "./screens/ProducerScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import BasketScreen from "./screens/BasketScreen";
import GardenScreen from "./screens/GardenScreen";
import ResearchScreen from "./screens/ResearchScreen";
import ValidateScreen from "./screens/ValidateScreen";
import SplashScreen from "./screens/SplashScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import user from "./reducers/user.reducers";

const store = createStore(combineReducers({ user }));

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
					} else if (route.name == "Profile") {
						iconName = "person";
					}

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
			<Tab.Screen name="Research" component={ResearchScreen} />
			<Tab.Screen name="Basket" component={BasketScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default function App() {
	let [fontsLoaded] = useFonts({
		Dosis: require("./assets/fonts/Dosis-Bold.ttf"),
		DosisBold: require("./assets/fonts/Dosis-ExtraBold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="SplashScreen" component={SplashScreen} />
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen name="Register" component={RegisterScreen} />
					<Stack.Screen name="Validate" component={ValidateScreen} />
					<Stack.Screen name="Producer" component={ProducerScreen} />
					<Stack.Screen name="BottomNavigator" component={BottomNavigator} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
