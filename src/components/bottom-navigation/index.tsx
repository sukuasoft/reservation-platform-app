import { View } from "react-native";
import bottomNavigationStyles from "./style";
import BottomNavigationItem from "./item";
import { router } from "expo-router";


type BottomNavigationProps = {
    pageId:number
}

export default function BottomNavigation ({pageId}:BottomNavigationProps){

    return (
        <View style={bottomNavigationStyles.container}>
            <BottomNavigationItem onClick={()=>{
                router.replace('/home')
            }} source={require('@/assets/images/dashboard.png')}
            title="Início"  
              current={pageId==0}/>
            <BottomNavigationItem 
             onClick={()=>{
                router.replace('/services')
            }}
            source={require('@/assets/images/tool.png')}  
            title="Serviços" current={pageId==1}/>
            <BottomNavigationItem 
              onClick={()=>{
                router.replace('/reservations')
            }}
            source={require('@/assets/images/reservation.png')} 
            title='Reservas' current={pageId==2}/>
        </View>
    )
}