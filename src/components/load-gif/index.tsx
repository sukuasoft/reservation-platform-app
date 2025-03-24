import { Image } from "expo-image";
import loadGifStyles from './style';

export default function LoadGif (){
    return (<Image style={loadGifStyles.gif} source={require('./../../assets/images/load.gif')} />)
}