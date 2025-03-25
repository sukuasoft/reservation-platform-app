import React from "react";
import {  Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import buttonStyles from "./style";
import { AppColors } from "@/theme/colors";

type ButtonProps =   TouchableOpacityProps & {
  children?: React.ReactNode |undefined, 
  backgroundColor?: string |undefined, 
  icon?:React.ReactNode, 
  text:string
}

export default function Button ({text,backgroundColor=AppColors.primary,icon, disabled, ...rest}: ButtonProps){
    return (<TouchableOpacity  style={{
        ...buttonStyles.button, 
        backgroundColor: !disabled ?  backgroundColor : '#aaaaaa'
    }} {...rest}>
        {icon}
        <Text style={buttonStyles.text}>{text}</Text>
    </TouchableOpacity>)
}