import { Text, View } from "react-native";
import TextButton from "../text-button";
import reservationCardStyles from "./style";
import Button from "../button";
import { formatKwanza } from "@/utils/currency";


type ReservationCardProps = {
    order:number, 
    reservation:Reservation, 
    onClickCancel: ()=>void;
}
export default function ReservationCard ({order, reservation, onClickCancel}:ReservationCardProps){
    return (
        <View style={reservationCardStyles.container}>
            <View style={reservationCardStyles.header}>
            <Text style={reservationCardStyles.title}>Reserva #{order}</Text>

                <View style={reservationCardStyles.status}>
                    <View style={{
                    ...reservationCardStyles.statusMark, 
                        backgroundColor: reservation.status =='active' ? 
                        '#10ff30': '#ff0000'
                    }}></View>
                    <Text style={reservationCardStyles.statusTitle}>{
                        reservation.status =='active' ? 'Activo': 'Cancelado'}</Text>
                </View>
            </View>

            <Text style={reservationCardStyles.price}> Criado em:  {new Date(reservation.createdAt).toLocaleDateString('pt-PT')}</Text>
        <View style={reservationCardStyles.divider}></View>

        <Text style={reservationCardStyles.values}>Serviço: {reservation.service.name}</Text>
        <Text style={reservationCardStyles.values}>Preço: {formatKwanza(reservation.service.price)}</Text>
        <Text style={reservationCardStyles.values}>Quantidade: {reservation.quantity}</Text>
         {
            reservation.status == 'active' &&    <TextButton  onPress={onClickCancel} style={{
                marginTop: 10, 
                marginLeft: 'auto'
             
            }}    textColor='#ff0000'>Cancelar</TextButton>
         }
        </View>
    )
}

