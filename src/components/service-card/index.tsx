import { Text, View } from "react-native";
import TextButton from "../text-button";
import serviceCardStyles from "./style";


export default function ServiceCard (){
    return (
        <View style={serviceCardStyles.container}>
            <Text style={serviceCardStyles.title}>Nome</Text>
            <View style={serviceCardStyles.header}>
                <Text style={serviceCardStyles.owner}>Dono</Text>
                <Text style={serviceCardStyles.price}>0 Kz</Text>
            </View>

            <TextButton style={serviceCardStyles.btn}>Reservar</TextButton>
        </View>
    )
}

