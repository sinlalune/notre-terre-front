import { Camera } from "expo-camera";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";

import { connect } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";

function ProfileScreen(props) {
	var handleLogout = () => {
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
					width: 80,
					height: 80,
					marginRight: "5%",
					alignContent: "center",
					alignItems: "center",
					marginTop: 200,
					alignSelf: "center",
					borderWidth: 1,
					borderRadius: 50,
				}}
			/>
			<Button
				title="Logout"
				containerStyle={{
					marginTop: 150,
				}}
				onPress={() => {
					handleLogout();
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
