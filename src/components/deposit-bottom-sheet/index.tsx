import MyBottomSheet, { MyBottomSheetProps } from "../bottom-sheet";
import Button from "../button";
import Input from "../input";
import { Text, View } from "react-native";
import depositBottomSheetStyles from "./style";
import { forwardRef, useState } from "react";
import Toast from "react-native-toast-message";
import { useApp } from "@/hooks/app";
import useApi from "@/hooks/api";
import LoadGif from "../load-gif";

type DepositBottomSheetProps = MyBottomSheetProps & {};

export default function DepositBottomSheet({
  onCloseSheet,
}: DepositBottomSheetProps) {
  const [isFetch, setIsFetch] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const { patch } = useApi();

  const { user, setUser } = useApp();

  async function deposit() {
    if(isFetch)return;
    setIsFetch(true);
    const data = await patch("/deposit", {
      amount,
    });

    if (data.status == 200) {
      if (user) {
        setUser({
          ...user,
          balance: user.balance + amount,
        });
      }

      Toast.show({
        type: "success",
        text1: "Depósito com sucesso",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Houve um problema, tente novamente",
      });
    }

    setIsFetch(false);
    if (onCloseSheet) {
      onCloseSheet();
    }
  }

  return (
    <MyBottomSheet onCloseSheet={onCloseSheet} snapPoints={["30%", "35%"]}>
      <View style={depositBottomSheetStyles.container}>
        <Text style={depositBottomSheetStyles.headline}>Depositar agora</Text>
        <Input value={amount.toString()} onChangeText={(value)=>{
            let _value = parseFloat(value);
            setAmount(Number.isNaN(_value) ? 0: _value);
        }} placeholder="Valor" />
        <Button onPress={deposit} text="Depositar" disabled={isFetch} icon={
            isFetch && <LoadGif width={20} height={20} />
        } />
      </View>
    </MyBottomSheet>
  );
}
