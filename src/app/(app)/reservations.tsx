import { View , Text} from "react-native";
import reservationsStyles from "./reservations.style";
import Appbar from "@/components/appbar";
import BottomNavigation from "@/components/bottom-navigation";

export default function Reservations(){
    return (<View  style={{
        height: '100%'
    }}>
        <Appbar />
        <Text>Reservations</Text>
        <BottomNavigation pageId={2}/>
    </View>)
}