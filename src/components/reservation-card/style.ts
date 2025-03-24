import { StyleSheet } from "react-native";

const reservationCardStyles = StyleSheet.create({
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
    
    }, 
    header: {
        flexDirection: 'row', 
        marginTop: 5,
        marginBottom: 10 

    },
    divider: {
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1, 
        marginTop:10, 
        marginBottom: 10

    }, 
    title: {
        fontWeight: 'bold',
        fontSize: 14, 
    },
    values: {
        fontSize: 12, 
        marginBottom: 5
    },
    price: {
color: '#aaaaaa', 
fontSize: 12, 

    },
    btn: {
   
        marginLeft: 'auto'
    }, 

    status: {
        marginLeft: 'auto', 
        flexDirection:'row', 
        gap: 3, 
        alignItems:'center'
    },

    statusMark: {
        width: 8, 
        height: 8, 
        backgroundColor: '#10ff30', 
        borderRadius: 8

    }, 
    statusTitle: {
        fontSize: 12

    }

})

export default reservationCardStyles;