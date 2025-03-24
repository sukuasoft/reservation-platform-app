import { View, Image, Text } from "react-native";
import appbarStyles from "./style";
import Button from "../button";

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
        <Button backgroundColor="#ff0000">Sair</Button>
      </View>
    </View>
  );
}
