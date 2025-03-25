import MyBottomSheet from "../bottom-sheet"
import Button from "../button"
import Input from "../input"
import { Text, View} from "react-native"
import depositBottomSheetStyles from "./style"

export default function DepositBottomSheet (){
    return  (<MyBottomSheet snapPoints={['30%', '35%']} >
        <View style={depositBottomSheetStyles.container}>
        <Text style={depositBottomSheetStyles.headline}>Depositar agora</Text>
        <Input placeholder="Valor" />
        <Button>Depositar</Button>
        </View>
    </MyBottomSheet>)
}