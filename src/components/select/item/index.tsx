import { Picker, PickerItemProps } from "@react-native-picker/picker"

type SelectItemProps = PickerItemProps & {

}
export default function SelectItem ({...rest}:SelectItemProps){
    return (
        <Picker.Item {...rest}/>
    )
}