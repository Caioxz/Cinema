import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const markers = [
  {
    latitude: -23.538784285038854,
    longitude:-46.575915519713135,
    title: "Cinemark tatuapé",
    description: "",
  },
  {
    latitude: -23.62563162811251,
    longitude: -46.70581373135748,
    title: "Kinoplex Parque da Cidade ",
    description: "",
  },
  {
    latitude:-23.5429008275743,
    longitude: -46.31843713320716,
    title: "Centerplex Suzano",
    description: "",
  },

  // Adicione mais marcadores conforme necessário
];

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55016805723421,
          longitude: -46.633911204371714,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});