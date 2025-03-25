import { View, Text, TouchableOpacity } from "react-native";
import homeStyles from "./home.style";
import Appbar from "@/components/appbar";
import BottomNavigation from "@/components/bottom-navigation";
import AppContent from "@/components/app-content";
import TextButton from "@/components/text-button";
import ServiceCard from "@/components/service-card";
import MyBottomSheet from "@/components/bottom-sheet";
import DepositBottomSheet from "@/components/deposit-bottom-sheet";
import ReserveBottomSheet from "@/components/reserve-bottom-sheet";
import { useApp } from "@/hooks/app";
import { formatKwanza } from "@/utils/currency";
import { Link, router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import useApi from "@/hooks/api";
import LoadGif from "@/components/load-gif";

export default function Home() {
  const { user } = useApp();
  const{get} =useApi();  
    const [showDeposit, setShowDeposit] =useState(false);
    const [showReserve, setShowReserve] =useState(false);


    const [services, setServices] = useState<Service[]>([]);
    
    const [isFetchServices, setIsFetchServices] = useState(false);
    const [serviceSelected, setServiceSelected]=useState<Service |null>(null);
  
    async function fetchServices() {
      setIsFetchServices(true);
      const _services = await get("/services");
      if (_services.status == 200) {
        setServices(_services.data);
      }
      setIsFetchServices(false);
    }
    useEffect(() => {
        if (user?.type == 'service_provider') return;
      fetchServices();
    }, []);
  
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Appbar />
      <AppContent>
        <Text style={homeStyles.hello}>Olá, {user?.name ?? ""}</Text>
        <Text style={homeStyles.balanceTitle}>Saldo</Text>
        <Text>{formatKwanza(user?.balance ?? 0)}</Text>

        {user?.type == 'client' &&  <TextButton onPress={()=>{
            setShowDeposit(true);
        }}>+ Adicionar saldo</TextButton>}

        {user?.type == "client" ? (
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Text style={homeStyles.servicesTitle}>Serviços disponíveis</Text>
          {isFetchServices &&  <LoadGif  width={20} height={20} invert={false}/>}

            <View style={homeStyles.services}>
              {services.map((service, index) => {
                return <ServiceCard onPress={()=>{
                    setServiceSelected(service);
                    setShowReserve(true);
                }} key={service.id} service={service} />;
              })}
            </View>
          </View>
        ) : (
          <TouchableOpacity onPress={()=>{
            router.replace('/services');
          }}>
            <View style={homeStyles.serviceExplorer}>
              <Text style={homeStyles.serviceExplorerTitle}>
                Explorar serviços
              </Text>
              <Text style={homeStyles.serviceExplorerSubtitle}>
                Clique aqui para visualizar e gerenciar os seus serviços.
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </AppContent>
      <BottomNavigation pageId={0} />
      {showDeposit  &&   <DepositBottomSheet serviceSelected={serviceSelected}  onCloseSheet={()=>{
        setShowDeposit(false);
      }} />}
      {showReserve  &&   <ReserveBottomSheet onCloseSheet={()=>{
        setShowReserve(false);
      }}  />}
    </View>
  );
}
