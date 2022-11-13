import { Dimensions, Platform, StyleSheet } from "react-native";
export const styles = StyleSheet.create({

	container: {
		flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
	},
	logoText: {
		color: "rgba(222, 224, 150, 0.35)",
		alignItems : "center",
		textAlign: "center",
		fontSize: 80,
		marginTop: 20,
		letterSpacing: 0.46,
	},
	header: {
		backgroundColor: "rgba(0, 0, 0, 0.4)",
		marginTop: -50,
		borderRadius: 3,
		// position: "relative",
	},
	headerLogoText: {
		color: "rgba(222, 224, 150, 1)",
	},
	headerLogo: {
		top:50,
	},
	cardBox: {
		width: (Dimensions.get("window").width * 8) / 10,
		height:
      Platform.OS === "ios" ? (Dimensions.get("window").height * 5) / 12 + 25 : (Dimensions.get("window").height * 5) / 12,
		backgroundColor: "#fff",
		borderRadius: 20,
		padding: 16,
		marginTop: 50,
		marginLeft: 40,
		marginRight: 40
	},
	tableContent: {
		overflow: "scroll",
		maxHeight: 200,
	},
	buttonContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20

	},
	Button: {
		// flex: 1,
		borderRadius: 5,

	}
});