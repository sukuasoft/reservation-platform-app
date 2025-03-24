import { AppColors } from "@/theme/colors";
import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.primary, 
        paddingHorizontal: 12, 
        paddingVertical: 4, 
        borderRadius: 10,
    }, 
    text: {
        color: '#ffffff'
    }
});

export default  buttonStyles;