import { Image ,ImageProps} from "expo-image";
import loadGifStyles from './style';

type LoadGifProps = {
width?: number, 
height?: number,
}

export default function LoadGif ({width=30, height=30}:LoadGifProps){
    return (<Image style={{
        
        ...loadGifStyles.gif, 
        width: width,
        height: height
  
    }} source={require('./../../assets/images/load.gif')} />)
}