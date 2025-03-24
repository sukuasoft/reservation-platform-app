import { View , Text} from "react-native";
import servicesStyles from "./services.style";
import Appbar from "@/components/appbar";
import BottomNavigation from "@/components/bottom-navigation";
import AppContent from "@/components/app-content";
import TextButton from "@/components/text-button";

export default function Services(){
    return (<View  style={{
        height: '100%'
    }}>
        <Appbar />
        <AppContent>
            <View>
                <Text>Lista de Serviços</Text>
                <TextButton>+ Adicionar</TextButton>
            </View>
        </AppContent>
        <BottomNavigation pageId={1}/>
    </View>)
}