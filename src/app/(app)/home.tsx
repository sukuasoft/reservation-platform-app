import { View , Text} from "react-native";
import homeStyles from "./home.style";
import Appbar from "@/components/appbar";
import BottomNavigation from "@/components/bottom-navigation";

export default function Home(){
    return (<View style={{
        height: '100%'
    }}>
        <Appbar />
        <Text>Home</Text>
        <BottomNavigation pageId={0} />
    </View>)
}