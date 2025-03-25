import BottomSheet, {
  BottomSheetProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useMemo, useRef } from "react";
import bottomSheetStyles from "./styles";
import { View } from "react-native";

type MyBottomSheetProps = BottomSheetProps & {};

export default function MyBottomSheet({
  children,
  ...rest
}: MyBottomSheetProps) {
  const bottomSheetRef = useRef(null);



  return (
    <View style={bottomSheetStyles.container}>
      <BottomSheet
        index={1}
        style={bottomSheetStyles.containerContent}
        ref={bottomSheetRef}
        {...rest}
       
      >
        <BottomSheetView>{children}</BottomSheetView>
      </BottomSheet>
    </View>
  );
}
