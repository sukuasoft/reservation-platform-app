import { AppColors } from "@/theme/colors"
import { StyleSheet } from "react-native"

export const indexStyles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%', 
        width: '100%',
        backgroundColor: AppColors.primary, 
    }, 

    logoAndName: {
        marginBottom: 20, 
        flexDirection: 'row', 
        gap: 6, 
        alignItems: 'center'
    }, 



    logoContainer: {
        padding: 10, 
        borderRadius: 10, 
        backgroundColor: AppColors.primaryLight
    }, 
    logo: {
        
        width: 20, 
        height:20, 
        filter: "invert(100%)",
    }, name:{
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 22
    }
})

export default indexStyles;