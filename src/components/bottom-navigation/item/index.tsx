import { View , Image, ImageSourcePropType, Text, TouchableOpacity, GestureResponderEvent} from "react-native"
import bottomNavigationItemStyles from "./style"
import { AppColors } from "@/theme/colors"


type BottomNavigationItemProps  = {
    source?: ImageSourcePropType | undefined, 
    title:string,
    current?:boolean, 
    onClick?:()=>void, 
    active?:boolean
}

export default function BottomNavigationItem ({source, title, active=true,current=false, onClick}:BottomNavigationItemProps){
   
   
    return (

        <TouchableOpacity  disabled={!active} onPress={()=>{
            if (active && onClick){
                onClick();
            }
        }}>
        <View 
    
        style={{
            ...bottomNavigationItemStyles.container, 
            backgroundColor: current ? AppColors.primaryLight: '#eeeeee', 
            opacity:active ? 1 : 0.5
        }}>
            <Image source={source} 
            style={{
                ...bottomNavigationItemStyles.icon,
                
                ...(current ? 
                bottomNavigationItemStyles.iconWhite: {})

            }}/>
            <Text style={{...bottomNavigationItemStyles.title,
                color: current ? 'white': 'black'
            }}>{title}</Text>
        </View>
        </TouchableOpacity>
    )
}