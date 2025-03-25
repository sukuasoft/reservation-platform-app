import { Text, View, Image, ScrollView } from "react-native";
import registerStyles from "./register.style";
import Appbar from "@/components/appbar";
import Input from "@/components/input";
import Button from "@/components/button";
import TextButton from "@/components/text-button";
import { router } from "expo-router";
import Select from "@/components/select";
import SelectItem from "@/components/select/item";
import Toast from "react-native-toast-message";
import { useEffect, useRef, useState } from "react";
import { useApp } from "@/hooks/app";
import useApi from "@/hooks/api";
import LoadGif from "@/components/load-gif";
import { delayTime } from "@/utils/time";

interface FormDataRegister {
  name: string;
  email: string;
  type: string;
  nif: string;
  password: string;
}

export default function Register() {
  const { post, get } = useApi();
  const { saveToken, token, setUser } = useApp();

  const [formData, setFormData] = useState<FormDataRegister>({
    name: "",
    email: "",
    type: "client",
    nif: "",
    password: "",
  });

  const [isFetch, setIsFetch] = useState(false);

  async function register() {
    if (isFetch) return;

    setIsFetch(true);

    const requestData: any = { ...formData };

    if (formData.type == "client") {
      delete requestData.nif;
    }

    const data = await post("/auth/register", requestData);

    if (data.status == 200 || data.status == 201) {
      saveToken(data.data.token);
    } else {
      Toast.show({
        type: "error",
        text1: "Houve um erro, este pode já ter sido cadastrado",
      });
    }

    setIsFetch(false);
  }

  async function getMe() {
    if (token) {
      const _data = await get("/me");

      if (_data.status == 200) {
        setUser({
          name: _data.data.name,
          email: _data.data.email,
          type: _data.data.type,
          nif: _data.data.nif,
          balance: _data.data.balance,
        });
        Toast.show({
          type: "success",
          text1: "Conta criada com sucesso!",
        });
        router.replace("/home");
        return;
      }
    }
  }
  useEffect(() => {
    getMe();
  }, [token]);

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Appbar />
      <ScrollView>
        <View style={registerStyles.container}>
          <Image
            style={{
              width: 100,
              height: 100,
              margin: "auto",
            }}
            source={require("@/assets/images/hello.png")}
          />
          <Text style={registerStyles.titleHeader}>Crie uma conta</Text>
          <View style={registerStyles.formContainer}>
            <Input
              onChangeText={(value) => {
                setFormData({
                  ...formData,
                  name: value,
                });
              }}
              placeholder="Nome completo"
            />
            <Input
              onChangeText={(value) => {
                setFormData({
                  ...formData,
                  email: value,
                });
              }}
              placeholder="E-mail"
            />
            <Select
              onValueChange={(value) => {
                setFormData({
                  ...formData,
                  type: value.toString(),
                });
              }}
            >
              <SelectItem label="Cliente" value="client" />
              <SelectItem
                label="Prestador de serviço"
                value="service_provider"
              />
            </Select>
            {formData.type == "service_provider" && (
              <Input
                onChangeText={(value) => {
                  setFormData({
                    ...formData,
                    nif: value,
                  });
                }}
                placeholder="NIF"
              />
            )}
            <Input
              secureTextEntry={true}
              onChangeText={(value) => {
                setFormData({
                  ...formData,
                  password: value,
                });
              }}
              placeholder="Senha"
            />
            <Button
              disabled={isFetch}
              onPress={register}
              text="Registrar"
              icon={isFetch && <LoadGif width={20} height={20} />}
            />

            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Já possui uma conta?</Text>
              <TextButton
                onPress={() => {
                  router.replace("/login");
                }}
              >
                Entre agora
              </TextButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
