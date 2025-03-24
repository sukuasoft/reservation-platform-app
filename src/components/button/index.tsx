import React from "react";
import {  Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import buttonStyles from "./style";
import { AppColors } from "@/theme/colors";

type ButtonProps =   TouchableOpacityProps & {
  children?: React.ReactNode |undefined, 
  backgroundColor?: string |undefined
}

export default function Button ({children,backgroundColor=AppColors.primary, ...rest}: ButtonProps){
    return (<TouchableOpacity  style={{
        ...buttonStyles.button, 
        backgroundColor
    }} {...rest}>
        <Text style={buttonStyles.text}>{children}</Text>
    </TouchableOpacity>)
}