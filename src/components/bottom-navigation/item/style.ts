import { StyleSheet } from "react-native";

const bottomNavigationItemStyles = StyleSheet.create({
    iconWhite: {
        filter: 'invert(100%)'
    },
    icon: {
        width: 20, 
        height:20,
    }, 
    title: {


    },
    container: {
       
        flexDirection: 'row',
        gap: 5, 
        paddingHorizontal: 10, 
        paddingVertical: 4, 
        borderRadius: 20
    }

});


export default bottomNavigationItemStyles;