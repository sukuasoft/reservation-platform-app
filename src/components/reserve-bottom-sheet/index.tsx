import MyBottomSheet, { MyBottomSheetProps } from "../bottom-sheet"
import Button from "../button"
import Input from "../input"
import { Text, View} from "react-native"
import reserveBottomSheetStyles from "./style"
import Toast from "react-native-toast-message"
import { formatKwanza } from "@/utils/currency"
import { router } from "expo-router"
import { useApp } from "@/hooks/app"
import useApi from "@/hooks/api"
import { useState } from "react"
import LoadGif from "../load-gif"



type ReserveBottomSheetProps =  MyBottomSheetProps &{
    serviceSelected:Service|null
};

export default function ReserveBottomSheet ({onCloseSheet, serviceSelected}: ReserveBottomSheetProps){
    const [isFetch, setIsFetch] = useState(false);
    const [quantity, setQuantity] = useState<number>(1);
    const { post } = useApi();
    const {user, setUser}=useApp();
  
    async function reserve() {
      if(!serviceSelected || isFetch) return;
      setIsFetch(true);
      const data = await post("/reservations", {
        quantity,
        serviceId:serviceSelected.id
      });
  
      if (data.status == 200 || data.status == 201) {
       
        Toast.show({
            type: 'success',
            text1: "Reserva criada com sucesso!"
        });
        if(user){
          setUser({
            ...user, 
            balance: user.balance - (serviceSelected.price * quantity)
          })
        }
        
        router.push('/reservations')
        
      
  
      } else {
        Toast.show({
            type: 'error', 
            text1: "Consulte o saldo na conta, tente novamente"
        });
  
      }
  
      setIsFetch(false);
if(onCloseSheet){
    onCloseSheet();
}
    }

 return  (<MyBottomSheet onCloseSheet={onCloseSheet} snapPoints={['55%', '60%']} >
        <View style={reserveBottomSheetStyles.container}>
        <Text style={reserveBottomSheetStyles.headline}>Criar reserva</Text>
        <View>
        <Text style={reserveBottomSheetStyles.smallText}>Serviço: {serviceSelected?.name ?? ''}</Text>
        <Text style={reserveBottomSheetStyles.smallText}>Proprietário: {serviceSelected?.owner.name ?? ''}</Text>
        <Text  style={reserveBottomSheetStyles.smallText}>Preço: {formatKwanza(serviceSelected?.price ?? 0)}</Text>
        </View>
        <Input value={quantity.toString()} onChangeText={(value)=>{
            let _value = parseFloat(value);
            setQuantity(Number.isNaN(_value) ? 0: _value);

        }} placeholder="Quantidade" />
        <View style={{
            gap: 2, 
            alignItems:'center', 
            flexDirection: 'row'
        }}>
            <Text style={reserveBottomSheetStyles.totalText}>Total: </Text>
            <Text style={{
                fontSize: 12
            }}>{formatKwanza((serviceSelected?.price ?? 0) * quantity)}</Text>
        </View>
        <Button onPress={reserve} disabled={isFetch} text='Reservar' icon={
            isFetch && <LoadGif width={20} height={20} />
        }/> 
        </View>
    </MyBottomSheet>)
}