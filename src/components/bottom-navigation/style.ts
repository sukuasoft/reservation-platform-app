import { StyleSheet } from "react-native";

const bottomNavigationStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -10 }, // 👆 Sombra para cima (iOS)
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Android
  },
});

export default bottomNavigationStyles;
