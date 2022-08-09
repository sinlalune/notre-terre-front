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
