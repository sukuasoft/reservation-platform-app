import { View, Text } from "react-native";
import reservationsStyles from "./reservations.style";
import Appbar from "@/components/appbar";
import BottomNavigation from "@/components/bottom-navigation";
import AppContent from "@/components/app-content";
import ReservationCard from "@/components/reservation-card";
import useApi from "@/hooks/api";
import { useEffect, useState } from "react";
import LoadGif from "@/components/load-gif";
import Toast from "react-native-toast-message";

export default function Reservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const { get, patch } = useApi();

  const [isFetchReservations, setIsFetchReservations] = useState(false);

  async function fetchReservations() {
    setIsFetchReservations(true);
    const _reservations = await get("/reservations");
    if (_reservations.status == 200) {
      setReservations(_reservations.data);
    }
    setIsFetchReservations(false);
  }
  useEffect(() => {
    fetchReservations();
  }, []);

  async function cancelReservation(reservation: Reservation) {
    const data = await patch(`/reservations/${reservation.id}/cancel`, {});

    if (data.status == 200) {
      Toast.show({
        type: "success",
        text1: "Serviço cancelado com sucesso",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Houve um problema, tente novamente",
      });
      return;
    }

    const _reservations = reservations.map((_reservation) => {
      if (_reservation.id == reservation.id) {
        return {
          ..._reservation,
          status: "canceled",
        };
      }
      return { ..._reservation };
    });

    setReservations(_reservations);
  }

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Appbar />
      <AppContent>
        <Text
          style={{
            marginBottom: 5,
          }}
        >
          Lista de Reservas
        </Text>

        {isFetchReservations && (
          <LoadGif width={20} height={20} invert={false} />
        )}
        <View style={reservationsStyles.reservations}>
          {reservations.map((reservation, index) => {
            return (
              <ReservationCard
                order={index + 1}
                reservation={reservation}
                onClickCancel={() => {
                  cancelReservation(reservation);
                }}
                key={reservation.id}
              />
            );
          })}
        </View>
      </AppContent>
      <BottomNavigation pageId={2} />
    </View>
  );
}
