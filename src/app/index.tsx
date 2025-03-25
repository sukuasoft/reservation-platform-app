import { View, Text, Image } from "react-native";
import indexStyles from "./index.style";
import LoadGif from "@/components/load-gif";
import { useEffect } from "react";
import { router } from "expo-router";
import useApi from "@/hooks/api";
import { useApp } from "@/hooks/app";
import { delayTime } from "@/utils/time";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const { get } = useApi();
  const { setUser , setToken } = useApp();

  async function init() {
    const _token = await AsyncStorage.getItem("token");

    if (_token == null) {
      router.replace("/register");
      return;
    }
    setToken(_token ?? "");

    await delayTime(0.8);

    const data = await get("/me");

    if (data.status == 200) {
      setUser({
        name: data.data.name,
        email: data.data.email,
        type: data.data.type,
        nif: data.data.nif,
        balance: data.data.balance,
      });
      router.replace("/home");
      return;
    }

    router.replace("/login");
  }
  useEffect(() => {
    init();
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
        <Text style={indexStyles.name}>ReserveJá</Text>
      </View>
      <LoadGif />
    </View>
  );
}
