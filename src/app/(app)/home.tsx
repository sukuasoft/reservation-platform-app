import { View , Text} from "react-native";
import homeStyles from "./home.style";
import Appbar from "@/components/appbar";
import BottomNavigation from "@/components/bottom-navigation";
import AppContent from "@/components/app-content";
import TextButton from "@/components/text-button";
import ServiceCard from "@/components/service-card";
import MyBottomSheet from "@/components/bottom-sheet";
import DepositBottomSheet from "@/components/deposit-bottom-sheet";
import ReserveBottomSheet from "@/components/reserve-bottom-sheet";

export default function Home(){
    return (<View style={{
        height: '100%'
    }}>
        <Appbar />
        <AppContent>
            <Text style={homeStyles.hello}>Ola, Sebastião</Text>
            <Text style={homeStyles.balanceTitle}>Saldo</Text>
            <Text>0 Kz</Text>

            <TextButton>+ Adicionar saldo</TextButton>


            <View style={homeStyles.serviceExplorer}>
                <Text style={homeStyles.serviceExplorerTitle}>Explorar serviços</Text>
                <Text style={homeStyles.serviceExplorerSubtitle}>Clique aqui para visualizar e gerenciar os seus serviços.</Text>
            </View>

            <Text style={homeStyles.servicesTitle}>Serviços disponíveis</Text>

            <View style={homeStyles.services}>
                {
                    [1, 2, 3, 4, 5, 6, 7].map((value, index)=>{
                        return <ServiceCard  key={index}/>
                    })
                }
            </View>
            
        </AppContent>
        <BottomNavigation pageId={0} />
      {/*} <DepositBottomSheet />
      <ReserveBottomSheet /> */}
    </View>)
}