import { Text, View } from "react-native";
import TextButton from "../text-button";
import serviceCardProviderStyles from "./style";
import { formatKwanza } from "@/utils/currency";

type ServiceProviderCardProps = {
  service: Service, 
  onClickEdit:()=>void, 
  onClickRemove: ()=>void, 
};
export default function ServiceProviderCard({
  service, onClickEdit, onClickRemove, 
}: ServiceProviderCardProps) {
  return (
    <View style={serviceCardProviderStyles.container}>
      <View>
        <Text style={serviceCardProviderStyles.title}>{service.name}</Text>
        <Text style={serviceCardProviderStyles.description}>
          {service.owner.name}
        </Text>
        <Text style={serviceCardProviderStyles.price}>
          {formatKwanza(service.price)}
        </Text>
      </View>

      <View style={serviceCardProviderStyles.right}>
        <TextButton style={serviceCardProviderStyles.btn} onPress={onClickEdit}>Editar</TextButton>
        <TextButton style={serviceCardProviderStyles.btn}  onPress={onClickRemove} textColor="#ff0000">
          - Deletar
        </TextButton>
      </View>
    </View>
  );
}
