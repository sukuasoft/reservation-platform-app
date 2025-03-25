import { View , Text} from "react-native";
import servicesStyles from "./services.style";
import Appbar from "@/components/appbar";
import BottomNavigation from "@/components/bottom-navigation";
import AppContent from "@/components/app-content";
import TextButton from "@/components/text-button";
import ServiceProviderCard from "@/components/service-provider-card";
import ServiceBottomSheet from "@/components/service-bottom-sheet";

export default function Services(){
    return (<View  style={{
        height: '100%'
    }}>
        <Appbar />
        <AppContent>
            <View style={servicesStyles.header}>
                <Text>Lista de Serviços</Text>
                <TextButton>+ Adicionar</TextButton>
            </View>

            <View style={servicesStyles.services}> 

            {
                    [1, 2, 3, 4, 5, 6,].map((value, key)=>{
                       return ( <ServiceProviderCard key={key} />)
                    })
                }

            </View>
        </AppContent>
        <BottomNavigation pageId={1}/>
        {/*<ServiceBottomSheet /> */}
    </View>)
}