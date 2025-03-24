import { View, Text, Image } from "react-native";
import indexStyles  from "./index.style";
import LoadGif from "@/components/load-gif";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Index() {

    useEffect(()=>{
        const interval = setTimeout(()=>{
            router.replace('/login');
        }, 2000);
        return ()=>{
            clearTimeout(interval);
        }
    }, []);
  return (
    <View style={indexStyles.container}>
      <View style={indexStyles.logoAndName}>
        <View style={indexStyles.logoContainer}>
          <Image
            style={indexStyles.logo}
            source={require("../assets/images/icon.png")}
          />
        </View>
        <Text style={indexStyles.name}>Plataforma de reservas</Text>
      </View>
      <LoadGif />
    </View>
  );
}
