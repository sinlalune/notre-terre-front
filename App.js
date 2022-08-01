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

//Import of all Screens
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ResearchScreen from "./screens/ResearchScreen";
import ProducerScreen from "./screens/ProducerScreen";
import BasketScreen from "./screens/BasketScreen";
import GardenScreen from "./screens/GardenScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Home" component={HomeScreen} />
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
