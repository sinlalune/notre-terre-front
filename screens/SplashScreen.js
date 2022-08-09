import React, { useState, useEffect } from "react";
import {
	ActivityIndicator,
	View,
	StyleSheet,
	Image,
	Dimensions,
	Text,
} from "react-native";

const hauteur = Dimensions.get("window").height;

const SplashScreen = (props) => {
	// Définie le state de l'animation
	const [animating, setAnimating] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setAnimating(false);
			// Redirige après l'animation sur le Login
			props.navigation.navigate("Login");
		}, 5000);
	}, []);

	return (
		<View style={styles.mainView}>
			<View style={styles.header}>
				<Image
					source={require("../assets/logonotreterre.png")}
					style={{
						height: 150,
						resizeMode: "contain",
					}}
				/>
				<Text style={styles.logoText}>Notre Terre</Text>
				<Text style={styles.tagLineText}>
					Vous aussi, invitez les meilleurs aliments dans votre cuisine
				</Text>
			</View>
			<ActivityIndicator
				animating={animating}
				color="#FFFFFF"
				size="large"
				style={styles.activityIndicator}
			/>
		</View>
	);
};

export default SplashScreen;

const styles = StyleSheet.create({
	mainView: {
		backgroundColor: "#0EA888",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marginTop: hauteur * -0.3,
	},
	logoText: {
		fontWeight: "bold",
		color: "white",
		fontSize: 35,
		fontFamily: "notoserif",
	},
	tagLineText: {
		color: "white",
		fontSize: 12,
		textAlign: "center",
		fontStyle: "italic",
		marginBottom: hauteur * 0.02,
	},
	activityIndicator: {
		alignItems: "center",
		height: 80,
		marginTop: hauteur * 0.05,
	},
});
