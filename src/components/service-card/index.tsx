import { Text, View } from "react-native";
import TextButton from "../text-button";
import serviceCardStyles from "./style";
import { formatKwanza } from "@/utils/currency";

type ServiceCardProps = {
    service:Service, 
    onPress: ()=>void
}
export default function ServiceCard ({service, onPress}:ServiceCardProps){
    return (
        <View style={serviceCardStyles.container}>
            <Text style={serviceCardStyles.title}>{service.name}</Text>
            <View style={serviceCardStyles.header}>
                <Text style={serviceCardStyles.owner}>{service.owner.name}</Text>
                <Text style={serviceCardStyles.price}>{formatKwanza(service.price)}</Text>
            </View>

            <TextButton onPress={onPress} style={serviceCardStyles.btn}>Reservar</TextButton>
        </View>
    )
}

