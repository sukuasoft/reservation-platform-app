import { View, Text } from "react-native";
import reservationsStyles from "./reservations.style";
import Appbar from "@/components/appbar";
import BottomNavigation from "@/components/bottom-navigation";
import AppContent from "@/components/app-content";
import ReservationCard from "@/components/reservation-card";

export default function Reservations() {
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Appbar />
      <AppContent>
        <Text>Lista de Reservas</Text>

        <View style={reservationsStyles.reservations}>
          {[1, 2, 3, 4, 5, 6].map(() => {
            return <ReservationCard />;
          })}
        </View>
      </AppContent>
      <BottomNavigation pageId={2} />
    </View>
  );
}
