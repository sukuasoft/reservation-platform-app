import BottomSheet, {
  BottomSheetProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { forwardRef, useMemo, useRef } from "react";
import bottomSheetStyles from "./styles";
import { Pressable, View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import TextButton from "../text-button";

export type MyBottomSheetProps =  {
  onCloseSheet?:()=>void;
  snapPoints?: any[],
  children?:React.ReactNode
};

export default function MyBottomSheet({
  children,
  onCloseSheet, 
  snapPoints,
}: MyBottomSheetProps) {
  return (
    <View style={bottomSheetStyles.container}>
      <BottomSheet
        index={1}
        style={bottomSheetStyles.containerContent}
    snapPoints={snapPoints}
      >
        <BottomSheetView>
          <View>
            <TextButton textColor="#ff0000" style={{
              marginLeft: 'auto',
              
            }} onPress={()=>{
              if(onCloseSheet){
                onCloseSheet();
              }
            }}>X</TextButton>
          {children}
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
