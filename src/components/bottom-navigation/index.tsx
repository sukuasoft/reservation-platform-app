import { View } from "react-native";
import bottomNavigationStyles from "./style";
import BottomNavigationItem from "./item";
import { router } from "expo-router";
import { useApp } from "@/hooks/app";


type BottomNavigationProps = {
    pageId:number
}

export default function BottomNavigation ({pageId}:BottomNavigationProps){
    const {user} =useApp();

    return (
        <View style={bottomNavigationStyles.container}>
            <BottomNavigationItem onClick={()=>{
                router.replace('/home')
            }} source={require('@/assets/images/dashboard.png')}
            title="Início"  
              current={pageId==0}/>
        {
            user?.type == 'service_provider' && 
            <BottomNavigationItem 
            active={user?.type == 'service_provider'}
                         onClick={()=>{
                            router.replace('/services')
                        }}
                        source={require('@/assets/images/tool.png')}  
                        title="Serviços" current={pageId==1}/>
        }

            {user?.type == 'client' &&
             <BottomNavigationItem 
             active={user?.type == 'client'}
               onClick={()=>{
                 router.replace('/reservations')
             }}
             source={require('@/assets/images/reservation.png')} 
             title='Reservas' current={pageId==2}/>
            }
           
        </View>
    )
}