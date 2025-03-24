import {Text, View} from 'react-native';
import loginStyles from './login.style';
import Appbar from '@/components/appbar';
import Input from '@/components/input';
import Button from '@/components/button';
import TextButton from '@/components/text-button';
import { router } from 'expo-router';

export default function Login (){
    return (<View>
        <Appbar />
        <View style={loginStyles.container}>
            <Text style={loginStyles.titleHeader}>Entre em sua conta</Text>
            <View style={loginStyles.formContainer}>
                <Input placeholder='E-mail'/>
                <Input placeholder='Senha'/>
                <Button onPress={()=>{
                    router.replace('/home')
                }}>Entrar</Button>
                <View style={{
                    flexDirection: 'row', 
                    marginTop: 15, 
                    alignItems: 'center', 
                    justifyContent:'center'
                }}>
                    <Text>Ainda não possui uma conta?</Text>
                    <TextButton onPress={()=>{
                        router.replace('/register');
                    }}>Crie agora</TextButton>
                </View>

            </View>

        </View>
    </View>)
}