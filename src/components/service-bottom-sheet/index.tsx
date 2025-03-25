import MyBottomSheet from "../bottom-sheet"
import Button from "../button"
import Input from "../input"
import { Text, View} from "react-native"
import serviceBottomSheetStyles from "./style"

export default function ServiceBottomSheet (){
    return  (<MyBottomSheet snapPoints={['55%', '60%']} >
        <View style={serviceBottomSheetStyles.container}>
        <Text style={serviceBottomSheetStyles.headline}>Criar serviço</Text>
    
        <Input placeholder="Nome do serviço" />
        <Input placeholder="Descrição" />
        <Input placeholder="Preço" />
      
        <Button>Criar</Button>
        </View>
    </MyBottomSheet>)
}