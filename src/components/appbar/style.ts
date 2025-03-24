import { StyleSheet } from "react-native";

const appbarStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 20, 
        paddingVertical: 15, 
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        borderColor: '#eeeeee'
    },
    logoAndName: {
        flexDirection: 'row', 
        alignItems:'center', 
        gap: 6

    }, 
    logo: {
        width: 20, 
        height: 20,
    
    }, 
    nameApp: {
        fontWeight: 'bold' 
    }, 
    rightActions: {
marginLeft: 'auto',
flexDirection: 'row', 

    }, 
   

});

export default appbarStyles;