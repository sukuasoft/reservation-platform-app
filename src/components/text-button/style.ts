import { AppColors } from "@/theme/colors";
import { StyleSheet } from "react-native";

const textButtonStyles = StyleSheet.create({
    button: {
        paddingHorizontal: 6, 
        paddingVertical: 4, 
        gap: 4, 
        flexDirection: 'row'
    }, 
    text: {
     
        color: AppColors.primary
    }
});

export default  textButtonStyles;