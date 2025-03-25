import MyBottomSheet, { MyBottomSheetProps } from "../bottom-sheet";
import Button from "../button";
import Input from "../input";
import { Text, View } from "react-native";
import serviceBottomSheetStyles from "./style";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import useApi from "@/hooks/api";
import LoadGif from "../load-gif";

type ServiceBottomSheetProps = MyBottomSheetProps & {
  serviceSelected: Service | null;
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
};

export default function ServiceBottomSheet({
  onCloseSheet,
  serviceSelected,
  services,
  setServices,
}: ServiceBottomSheetProps) {
  const { put, post } = useApi();

  const [isFetchRegister, setIsFetchRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
  });

  useEffect(()=>{

        if(serviceSelected){
            setFormData({
            name: serviceSelected.name, 
            description: serviceSelected.description, 
            price: serviceSelected.price
            })
        }
  }, []);

  async function registerService() {
    setIsFetchRegister(true);
    let _service = null;
    if (serviceSelected) {
      _service = await put(`/services/${serviceSelected.id}`, formData);
    } else {
      _service = await post("/services", formData);
    }
    if (_service.status == 200 || _service.status == 201) {
      if (serviceSelected) {
        setServices(
          services.map((service) => {
            if (service.id == serviceSelected.id) {
              return {
                ..._service.data,
              };
            }
            return service;
          })
        );
       
        Toast.show({
          type: "success",
          text1: "Serviço atualizado com sucesso!",
        });
      } else {
        setServices([...services, _service.data]);
        Toast.show({
          type: "success",
          text1: "Serviço criado com sucesso!",
        });
      }

      if (onCloseSheet) {
        onCloseSheet();
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Houve um problema, tente novamente",
      });
    }
    setIsFetchRegister(false);
  }

  return (
    <MyBottomSheet onCloseSheet={onCloseSheet} snapPoints={["55%", "60%"]}>
      <View style={serviceBottomSheetStyles.container}>
        <Text style={serviceBottomSheetStyles.headline}>{serviceSelected  ? 'Editar': 'Criar'} serviço</Text>

        <Input value={formData.name}  placeholder="Nome do serviço" onChangeText={(value)=>{
            setFormData({
                ...formData, 
                name: value
            })
        }}/>
        <Input value={formData.description}  placeholder="Descrição" onChangeText={(value)=>{
            setFormData({
                ...formData, 
                description: value
            })
        }} />
        <Input value={formData.price.toString()} keyboardType="numeric"  placeholder="Preço" onChangeText={(value)=>{
            let _value =parseFloat(value)
            setFormData({
                ...formData, 
                price: Number.isNaN(_value) ? 0: _value
            })
        }} />

        <Button text={serviceSelected ? 'Editar': 'Criar'} onPress={registerService} disabled={isFetchRegister}
        icon={
            isFetchRegister && <LoadGif width={20} height={20}/>
        }/>
      </View>
    </MyBottomSheet>
  );
}
