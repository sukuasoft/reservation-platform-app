import { StyleSheet } from "react-native";

const serviceCardStyles = StyleSheet.create({
    container: {
        borderRadius:10, 
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.01,
        shadowRadius: 5,
        elevation:0.5, // Android
        zIndex: 1,
        width: 150, 
    
    }, 
    header: {
        flexDirection: 'row', 
        marginTop: 5,
        marginBottom: 10 

    },
    title: {
        fontWeight: 'bold',
        fontSize: 12, 
    },
    owner: {
        fontSize: 12, 
    },
    price: {
marginLeft: 'auto', 
color: '#aaaaaa', 
fontSize: 12, 

    },
    btn: {
   
        marginLeft: 'auto'
    }

})

export default serviceCardStyles;