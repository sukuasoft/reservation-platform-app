import { Picker, PickerProps } from "@react-native-picker/picker";
import selectStyles from "./style";
import { View } from "react-native";

type SelectProps = PickerProps & {};

export default function Select({ children, ...rest }: SelectProps) {
  return <View style={selectStyles.container} >
     <Picker   {...rest}>{children}</Picker>
    </View>;
}
