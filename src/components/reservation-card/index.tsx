import { Text, View } from "react-native";
import TextButton from "../text-button";
import reservationCardStyles from "./style";
import Button from "../button";


export default function ReservationCard (){
    return (
        <View style={reservationCardStyles.container}>
            <View style={reservationCardStyles.header}>
            <Text style={reservationCardStyles.title}>Reserva #1</Text>

                <View style={reservationCardStyles.status}>
                    <View style={reservationCardStyles.statusMark}></View>
                    <Text style={reservationCardStyles.statusTitle}>Activo</Text>
                </View>
            </View>

            <Text style={reservationCardStyles.price}> Criado em: 10/02/2025</Text>
        <View style={reservationCardStyles.divider}></View>

        <Text style={reservationCardStyles.values}>Serviço: Venda</Text>
        <Text style={reservationCardStyles.values}>Preço: 10.000 Kz</Text>
        <Text style={reservationCardStyles.values}>Quantidade: 10</Text>
            <TextButton style={{
                marginTop: 10, 
                marginLeft: 'auto'
             
            }}    textColor='#ff0000'>Cancelar</TextButton>
        </View>
    )
}

