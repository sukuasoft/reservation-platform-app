import { AppColors } from "@/theme/colors";
import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
    hello: {
        fontSize: 12, 
        marginBottom: 10, 
    }, 
  balanceTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },

  serviceExplorer: {
    marginTop: 20,
    marginBottom: 20, 
    backgroundColor: "#eeeeee",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },

  serviceExplorerTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  serviceExplorerSubtitle: {
    fontSize: 12,
  },

  servicesTitle: {
    fontWeight: "bold",
    marginBottom: 15, 
    fontSize: 18,
  },
  services: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 10
  }
});

export default homeStyles;
