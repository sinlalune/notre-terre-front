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
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
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
						style={styles.iconExt}
						onPress={() => {
							props.navigation.navigate("Register");
						}}
					>
						<IconIonic name="arrow-back-circle" size={20} color="#ffffff" />
						<Text style={styles.iconTextExt}>Retour en arrière</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.iconInt}
						onPress={() => {
							setType(
								type === Camera.Constants.Type.back
									? Camera.Constants.Type.front
									: Camera.Constants.Type.back,
							);
						}}
					>
						<IconIonic name="camera-reverse" size={20} color="#ffffff" />
						<Text style={styles.iconTextInt}>Flip</Text>
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
									"http://192.168.1.73:3000/upload",
									{
										method: "post",
										body: data,
									},
								);
								const response = await rawResponse.json();

								props.onSnap(response.url);

								setVisible(false);
								console.log("uri :", photo.uri);
								console.log("width :", photo.width);
								console.log("height :", photo.height);
								console.log("exif :", photo.exif);
								console.log("base64 :", photo.base64);
							}
						}}
					>
						<MaterialIcons name="stop-circle" size={88} color="#ffffff" />
						<Text
							style={{
								fontSize: 14,
								marginBottom: hauteur * 0.015,
								textAlign: "center",
								color: "#ffffff",
							}}
						>
							Take a photo
						</Text>
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

function mapDispatchToProps(dispatch) {
	// viens enregistrer dans le store url photo
	return {
		onSnap: function (url) {
			dispatch({ type: "addPicture", url });
		},
	};
}

const styles = StyleSheet.create({
	iconTextInt: { fontSize: 14, color: "white", textAlign: "center" },
	iconTextExt: {
		fontSize: 14,
		color: "white",
		textAlign: "center",
	},
	iconInt: {
		flex: 1,
		alignItems: "center",
		marginBottom: hauteur * 0.059,
	},
	iconExt: {
		flex: 1,
		alignItems: "center",
		marginBottom: hauteur * 0.043,
	},
});

export default connect(null, mapDispatchToProps)(SnapScreen);
