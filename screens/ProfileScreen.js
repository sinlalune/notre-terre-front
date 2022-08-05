import { Camera } from "expo-camera";
import { View, Text, Image, TextInput, Icon } from "react-native";
import { Button } from "react-native-elements";

import { connect } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";

function ProfileScreen(props) {
	var handleLogOut = () => {
		AsyncStorage.clear();

		props.clearUserData();

		props.navigation.navigate("Login");
	};

	return (
		<View style={{ flex: 1, backgroundColor: "#9c32a8" }}>
			<Image
				source={{
					uri: "https://res.cloudinary.com/matthieudev/image/upload/v1659625192/generic-avatar_mpp1wf.png",
				}}
				style={{
					width: 100,
					height: 100,
					alignContent: "center",
					alignItems: "center",
					marginTop: 80,
					alignSelf: "center",
					borderRadius: 50,
				}}
			/>
			<TextInput
				placeholder="INPUT WITH CUSTOM ICON"
				// leftIcon={<Icon name="user" size={24} color="black" />}
			/>
			<Button
				title="Logout"
				containerStyle={{
					marginTop: 150,
				}}
				onPress={() => {
					handleLogOut();
				}}
			></Button>
		</View>
	);
}

function mapStateToProps(state) {
	return { user: state.user };
}

function mapDispatchToProps(dispatch) {
	return {
		clearUserData: function () {
			dispatch({ type: "clearUserData" });
		},
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
