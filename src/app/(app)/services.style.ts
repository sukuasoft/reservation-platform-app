import { StyleSheet } from "react-native"

const servicesStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: 15
    }, 
    services: {
        marginTop: 5, 
        flexDirection: 'column', 
        gap: 10
    }

});

export default servicesStyles;