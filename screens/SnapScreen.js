import React, { useState, useEffect, useRef } from "react";
import {
	View,
	TouchableOpacity,
	Text,
	Dimensions,
	StyleSheet,
} from "react-native";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import { Overlay } from "react-native-elements";
import IconIonic from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";

const Header = require("../components/Header");
const largeur = Dimensions.get("window").width;
const hauteur = Dimensions.get("window").height;

function SnapScreen(props) {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [flash, setFlash] = useState(Camera.Constants.FlashMode.torch);
	const [visible, setVisible] = useState(false);

	var camera = useRef(null);

	const isFocused = useIsFocused();

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	var cameraDisplay;
	if (hasPermission && isFocused) {
		cameraDisplay = (
			<Camera
				style={{
					width: largeur * 1,
					height: hauteur * 0.7,
					marginTop: hauteur * 0.2,
				}}
				type={type}
				flashMode={flash}
				ref={(ref) => (camera = ref)}
			>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						alignItems: "flex-end",
					}}
				>
					<TouchableOpacity
						style={styles.iconStyle}
						onPress={() => {
							props.navigation.navigate("Register");
						}}
					>
						<IconIonic name="arrow-back-circle" size={25} color="#ffffff" />
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.iconStyle}
						onPress={() => {
							setType(
								type === Camera.Constants.Type.back
									? Camera.Constants.Type.front
									: Camera.Constants.Type.back,
							);
						}}
					>
						<IconIonic name="camera-reverse" size={25} color="#ffffff" />
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							flex: 1,
							alignItems: "center",
						}}
						onPress={async () => {
							setVisible(true);
							if (camera) {
								let photo = await camera.takePictureAsync({
									quality: 0.4,
									base64: true,
									exif: true,
									skipProcessing: true,
								});

								var data = new FormData();

								data.append("photoTaken", {
									uri: photo.uri,
									type: "image/jpeg",
									name: "user_avatar.jpg",
								});

								const rawResponse = await fetch(
									"http://10.2.2.164:3000/users/upload-snap",
									{
										method: "post",
										body: data,
									},
								);
								const response = await rawResponse.json();
								// props.onSnap(response.url);
								console.log(
									"response.resultCloudinary.url in snapscreen",
									response.resultCloudinary.url,
								);

								setVisible(false);
								props.saveTempAvatar(response.resultCloudinary.url);
								props.navigation.navigate("BottomNavigator", {
									screen: "Profile",
								});

								// console.log("width :", photo.width);
								// console.log("height :", photo.height);
								// console.log("exif :", photo.exif);
								// console.log("base64 :", photo.base64);
							}
						}}
					>
						<MaterialIcons name="stop-circle" size={88} color="#ffffff" />
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.iconStyle}
						onPress={() => {
							setFlash(
								flash === Camera.Constants.FlashMode.off
									? Camera.Constants.FlashMode.torch
									: Camera.Constants.FlashMode.off,
							);
						}}
					>
						<Entypo name="flashlight" size={25} color="#ffffff" />
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.iconStyle}
						onPress={() => {
							setFlash(
								flash === Camera.Constants.FlashMode.off
									? Camera.Constants.FlashMode.torch
									: Camera.Constants.FlashMode.off,
							);
						}}
					>
						<FontAwesome name="picture-o" size={25} color="#ffffff" />
					</TouchableOpacity>
				</View>
			</Camera>
		);
	} else {
		cameraDisplay = <View style={{ flex: 1 }}></View>;
	}

	return (
		<View style={{ flex: 1 }}>
			<Overlay isVisible={visible} width="auto" height="auto">
				<Text>Enregistrement...</Text>
			</Overlay>

			{cameraDisplay}
		</View>
	);
}

const styles = StyleSheet.create({
	iconStyle: {
		flex: 1,
		alignItems: "center",
		marginBottom: hauteur * 0.04,
	},
});

function mapDispatchToProps(dispatch) {
	// viens enregistrer dans le store url photo
	return {
		saveTempAvatar: function (url) {
			dispatch({ type: "saveTempAvatar", newAvatar: url });
		},
	};
}

export default connect(null, mapDispatchToProps)(SnapScreen);
