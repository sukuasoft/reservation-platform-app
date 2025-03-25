import { AppProvider } from "@/contexts/appContext";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{
        flex:1 
    }}>
       <AppProvider apiUrl={process.env.EXPO_PUBLIC_API_URL ?? ''}>
          <Slot  />
          <Toast />
       </AppProvider>
    </GestureHandlerRootView>
  );
}
