import { View, Image, Text } from "react-native";
import appbarStyles from "./style";
import TextButton from "../text-button";
import { router } from "expo-router";
import { useApp } from "@/hooks/app";

export default function Appbar() {
  const {user, logout} = useApp();
  return (
    <View style={appbarStyles.container}>
      <View style={appbarStyles.logoAndName}>
        <Image
          style={appbarStyles.logo}
          source={require("@/assets/images/icon.png")}
        />
        <Text style={appbarStyles.nameApp}>ReserveJá</Text>
      </View>
      <View style={appbarStyles.rightActions}>
        {
          user && 
          <TextButton textColor="#ff0000" onPress={logout}>Sair</TextButton>
        }
      </View>
    </View>
  );
}
