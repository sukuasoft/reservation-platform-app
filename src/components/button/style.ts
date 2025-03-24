import { AppColors } from "@/theme/colors";
import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.primary, 
        paddingHorizontal: 12, 
        paddingVertical: 6, 
        borderRadius: 10,
    }, 
    text: {
        textAlign: 'center'
,
        color: '#ffffff'
    }
});

export default  buttonStyles;