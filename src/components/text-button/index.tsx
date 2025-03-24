import React from "react";
import {  Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import textButtonStyles from "./style";
import { AppColors } from "@/theme/colors";

type TextButtonProps =   TouchableOpacityProps & {
  children?: React.ReactNode |undefined, 
  textColor?: string |undefined
}

export default function TextButton ({children,textColor=AppColors.primary, ...rest}: TextButtonProps){
    return (<TouchableOpacity  style={{
        ...textButtonStyles.button, 
    }} {...rest}>
        <Text style={{
            
            ...textButtonStyles.text, 
            color:textColor
        }}>{children}</Text>
    </TouchableOpacity>)
}