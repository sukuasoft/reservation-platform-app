import {Text, View, Image, ScrollView} from 'react-native';
import loginStyles from './login.style';
import Appbar from '@/components/appbar';
import Input from '@/components/input';
import Button from '@/components/button';
import TextButton from '@/components/text-button';
import { router } from 'expo-router';
import { useState } from 'react';
import { useApp } from '@/hooks/app';
import useApi from '@/hooks/api';
import Toast from 'react-native-toast-message';
import LoadGif from '@/components/load-gif';

interface FormDataLogin {
    email: string;
    password: string;
  }
  
  export default function Register() {
    const { post } = useApi();
    const {saveToken} =useApp();
  
  
    const [formData, setFormData] = useState<FormDataLogin>({
      email: "",    
      password: "",
    });
  
    const [isFetch, setIsFetch] =useState(false);
  
    async function login (){
  
      if (isFetch)return;
 
  
      setIsFetch(true);
  
  
      const data = await post('/auth/login', formData);
  
      if(data.status == 200 || data.status == 201){
          saveToken(data.data.token);
        Toast.show({
            type: 'success',
            text1: 'Login com sucesso!'
        })
          
          router.push('/home')
          return;
      }
      else{
        Toast.show({
            type: 'error',
            text1: 'Houve um erro, credencias inválidas'
        })
          
      }
  
      setIsFetch(false);    
  
    }

    return (<View style={{
        height: '100%'
    }}>
        <Appbar />
        <ScrollView>
        <View style={loginStyles.container}>
            <Image style={{
                width: 100, 
                height: 100, 
                margin: 'auto'
            }} source={require('@/assets/images/login.png')} />
            <Text style={loginStyles.titleHeader}>Entre em sua conta</Text>
            <View style={loginStyles.formContainer}>
                <Input onChangeText={(value)=>{
                    setFormData({
                        ...formData, 
                        email: value
                    })
                }} placeholder='E-mail'/>
                <Input onChangeText={(value)=>{
                    setFormData({
                        ...formData, 
                        password: value
                    })
                }} secureTextEntry={true} placeholder='Senha'/>
                <Button onPress={login} text='Entrar' 
                disabled={isFetch} icon={
                    isFetch && <LoadGif width={20} height={20}/>
                }/>
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
        </ScrollView>
    </View>)
}