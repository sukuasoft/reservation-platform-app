import MyBottomSheet from "../bottom-sheet"
import Button from "../button"
import Input from "../input"
import { Text, View} from "react-native"
import reserveBottomSheetStyles from "./style"

export default function ReserveBottomSheet (){
    return  (<MyBottomSheet snapPoints={['55%', '60%']} >
        <View style={reserveBottomSheetStyles.container}>
        <Text style={reserveBottomSheetStyles.headline}>Criar reserva</Text>
        <View>
        <Text style={reserveBottomSheetStyles.smallText}>Serviço: Venda</Text>
        <Text style={reserveBottomSheetStyles.smallText}>Propetario: Pedro Neto</Text>
        <Text  style={reserveBottomSheetStyles.smallText}>Preço: 10.000 Kz</Text>
        </View>
        <Input placeholder="Quantidade" />
        <View style={{
            gap: 2, 
            alignItems:'center', 
            flexDirection: 'row'
        }}>
            <Text style={reserveBottomSheetStyles.totalText}>Total: </Text>
            <Text style={{
                fontSize: 12
            }}>0 Kz</Text>
        </View>
        <Button>Reservar</Button>
        </View>
    </MyBottomSheet>)
}