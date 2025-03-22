import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";

import {
  requestForegroundPermissionsAsync, // Requisitar permissão ao usuário
  getCurrentPositionAsync, // Se permissão conscedida, pegar atual localização do usuário
  LocationObject, // Localização do usuário
} from "expo-location";

export default function App() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  async function requestLocaltionPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocaltionPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Text className="text-red-900"> as asdasdasd</Text>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      )}
    </View>
  );
}
