import { Image ,ImageProps} from "expo-image";
import { View } from "react-native";
import loadGifStyles from './style';

type LoadGifProps = {
width?: number, 
height?: number,
invert?:boolean
}

export default function LoadGif ({width=30, height=30, invert=true}:LoadGifProps){
    return (
   <View style={{
    filter: invert ?  'invert(100%)' : '', 

   }}>
<Image style={{
        width: width,
        height: height
  
    }} source={require('./../../assets/images/load.gif')} />
   </View> 
    )
}