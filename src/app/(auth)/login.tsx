import {Text, View} from 'react-native';
import loginStyles from './login.style';
import Appbar from '@/components/appbar';

export default function Login (){
    return (<View>
        <Appbar />
        <View style={loginStyles.container}>
            <Text style={loginStyles.titleHeader}>Bem vindo de volta, entre em sua conta</Text>


        </View>
    </View>)
}