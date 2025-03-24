import { View, Image, Text } from "react-native";
import appbarStyles from "./style";
import TextButton from "../text-button";
import { router } from "expo-router";

export default function Appbar() {
  return (
    <View style={appbarStyles.container}>
      <View style={appbarStyles.logoAndName}>
        <Image
          style={appbarStyles.logo}
          source={require("@/assets/images/icon.png")}
        />
        <Text style={appbarStyles.nameApp}>Plataforma de reservas</Text>
      </View>
      <View style={appbarStyles.rightActions}>
        <TextButton textColor="#ff0000" onPress={()=>{
            router.replace('/')
        }}>Sair</TextButton>
      </View>
    </View>
  );
}
