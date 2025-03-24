import { TextInput, TextInputProps } from "react-native";
import inputStyles from "./style";

type InputProps = TextInputProps & {

}

export default function Input({...rest}:InputProps){
    return <TextInput style={inputStyles.container} {...rest}></TextInput>
}