import {Text, View, Image, ScrollView} from 'react-native';
import registerStyles from './register.style';
import Appbar from '@/components/appbar';
import Input from '@/components/input';
import Button from '@/components/button';
import TextButton from '@/components/text-button';
import { router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import Select from '@/components/select';
import SelectItem from '@/components/select/item';

export default function Register (){
    return (<View style={{
        height: '100%', 
    }}>
        <Appbar />
        <ScrollView>
        <View style={registerStyles.container}>
                <Image style={{
                            width: 100, 
                            height: 100, 
                            margin: 'auto'
                        }} source={require('@/assets/images/hello.png')} />
            <Text style={registerStyles.titleHeader}>Crie uma conta</Text>
            <View style={registerStyles.formContainer}>
                <Input placeholder='Nome completo'/>
                <Input placeholder='E-mail'/>
               <Select>
                <SelectItem  label='Cliente' value='client'/>
                <SelectItem  label='Prestador de serviço' value='service_provider'/>
               </Select>
                <Input placeholder='NIF'/>
                <Input placeholder='Senha'/>
                <Button onPress={()=>{
                    router.replace('/home');
                }}>Registrar</Button>
                <View style={{
                    flexDirection: 'row', 
                    marginTop: 15, 
                    alignItems: 'center', 
                    justifyContent:'center'
                }}>
                    <Text>Já possui uma conta?</Text>
                    <TextButton onPress={()=>{
                        router.replace('/login');
                    }}>Entre agora</TextButton>
                </View>

            </View>

        </View>
        </ScrollView>
    </View>)
}