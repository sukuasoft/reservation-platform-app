import { View , Text} from "react-native";
import homeStyles from "./home.style";
import Appbar from "@/components/appbar";

export default function Home(){
    return (<View>
        <Appbar />
        <Text>Home</Text>
    </View>)
}