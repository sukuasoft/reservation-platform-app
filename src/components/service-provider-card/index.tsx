import { Text, View } from "react-native";
import TextButton from "../text-button";
import serviceCardProviderStyles from "./style";


export default function ServiceProviderCard (){
    return (
        <View style={serviceCardProviderStyles.container}>
            <View>
            <Text style={serviceCardProviderStyles.title}>Nome</Text>
            <Text style={serviceCardProviderStyles.description}>Dono</Text>
            <Text style={serviceCardProviderStyles.price}>0 Kz</Text>
            </View>

            <View style={serviceCardProviderStyles.right}>
            <TextButton style={serviceCardProviderStyles.btn}>Editar</TextButton>
            <TextButton style={serviceCardProviderStyles.btn}  textColor="#ff0000">- Deletar</TextButton>

            </View>
        </View>
    )
}

