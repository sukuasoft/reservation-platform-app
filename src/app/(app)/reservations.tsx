import { View , Text} from "react-native";
import reservationsStyles from "./reservations.style";
import Appbar from "@/components/appbar";
import BottomNavigation from "@/components/bottom-navigation";
import AppContent from "@/components/app-content";

export default function Reservations(){
    return (<View  style={{
        height: '100%'
    }}>
        <Appbar />
        <AppContent>
        <Text>Reservations</Text>
        </AppContent>
        <BottomNavigation pageId={2}/>
    </View>)
}