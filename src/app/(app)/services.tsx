import { View , Text} from "react-native";
import servicesStyles from "./services.style";
import Appbar from "@/components/appbar";
import BottomNavigation from "@/components/bottom-navigation";
import AppContent from "@/components/app-content";
import TextButton from "@/components/text-button";
import ServiceProviderCard from "@/components/service-provider-card";
import ServiceBottomSheet from "@/components/service-bottom-sheet";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { useApp } from "@/hooks/app";
import useApi from "@/hooks/api";
import LoadGif from "@/components/load-gif";

export default function Services(){

        const [showCreateService, setShowCreateService] =useState(false);

        const [services, setServices] = useState<Service[]>([]);
        const { get, post, put, del } = useApi();
        const { user } = useApp();

        const [isFetchServices, setIsFetchServices] = useState(false);
        const [serviceSelected, setServiceSelected] = useState<Service | null>(null);
      
        async function fetchServices() {
          setIsFetchServices(true);
          const _services = await get("/services");
          if (_services.status == 200) {
            setServices(
              _services.data.filter((service: Service) => {
                if (service.owner.nif == user?.nif) {
                  return true;
                }
                return false;
              })
            );
          }
          setIsFetchServices(false);
        }

        useEffect(() => {
          fetchServices();
        }, []);
    
     
        async function deleteService(service: Service) {
          const _response = await del(`/services/${service.id}`);
          if (_response.status == 200) {
            setServices(
              services.filter((_service) => {
                if (_service.id == service.id) return false;
                return true;
              })
            );
            Toast.show({
                type: 'success',
                text1:"Serviço deletado com sucesso!"});
            
          } else {
            Toast.show({
                type:'error', 
              text1:  "Houve um problema, tente novamente"
            });
          }
        }
    
    return (<View  style={{
        height: '100%'
    }}>
        <Appbar />
        <AppContent>
            <View style={servicesStyles.header}>
                <Text>Lista de Serviços</Text>
                <TextButton onPress={()=>{
                    setShowCreateService(true);
                }}>+ Adicionar</TextButton>
            </View>

             {isFetchServices &&  <LoadGif  width={20} height={20} invert={false}/>}

            <View style={servicesStyles.services}> 

            {
                services.map((service, index)=>{
                       return ( <ServiceProviderCard onClickEdit={()=>{
                        setServiceSelected(service);
                        setShowCreateService(true);

                       }} onClickRemove={()=>{
                        deleteService(service);

                       }} key={service.id} service={service}/>)
                    })
                }

            </View>
        </AppContent>
        <BottomNavigation pageId={1}/>

        {showCreateService  &&   <ServiceBottomSheet services={services}
        setServices={setServices}
         serviceSelected={serviceSelected} onCloseSheet={()=>{
            setServiceSelected(null);
                setShowCreateService(false);
              }}  />}
   
    </View>)
}