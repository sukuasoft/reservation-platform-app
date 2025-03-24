import { View , Text} from "react-native";
import servicesStyles from "./services.style";
import Appbar from "@/components/appbar";
import BottomNavigation from "@/components/bottom-navigation";

export default function Services(){
    return (<View  style={{
        height: '100%'
    }}>
        <Appbar />
        <Text>Services</Text>
        <BottomNavigation pageId={1}/>
    </View>)
}