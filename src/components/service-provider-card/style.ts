import { StyleSheet } from "react-native";

const serviceCardProviderStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.01,
    shadowRadius: 5,
    elevation: 0.5, // Android
    zIndex: 1,
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
  },
  description: {
    fontSize: 12,
  },
  price: {
    color: "#aaaaaa",
    fontSize: 12,
  },
  btn: {
    marginLeft: "auto",
  },

  right: {
    marginLeft: "auto",
    gap: 5,
  },
});

export default serviceCardProviderStyles;
