import { View , Text} from "react-native";
import homeStyles from "./home.style";
import Appbar from "@/components/appbar";
import BottomNavigation from "@/components/bottom-navigation";
import AppContent from "@/components/app-content";

export default function Home(){
    return (<View style={{
        height: '100%'
    }}>
        <Appbar />
        <AppContent>
            <Text>Saldo</Text>
        </AppContent>
        <BottomNavigation pageId={0} />
    </View>)
}