import MyBottomSheet, { MyBottomSheetProps } from "../bottom-sheet";
import Button from "../button";
import Input from "../input";
import { Text, View } from "react-native";
import depositBottomSheetStyles from "./style";
import { forwardRef } from "react";

type DepositBottomSheetProps =  MyBottomSheetProps &{
};

export default function DepositBottomSheet({onCloseSheet}: DepositBottomSheetProps) {
  return (
    <MyBottomSheet  onCloseSheet={onCloseSheet}  snapPoints={["30%", "35%"]}>
      <View style={depositBottomSheetStyles.container}>
        <Text style={depositBottomSheetStyles.headline}>Depositar agora</Text>
        <Input placeholder="Valor" />
        <Button text="Depositar" />
      </View>
    </MyBottomSheet>
  );
}
