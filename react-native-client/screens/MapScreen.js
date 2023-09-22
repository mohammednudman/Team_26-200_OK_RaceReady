import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Image } from 'react-native';

const MUMBAI_LATITUDE = 19.0760;
const MUMBAI_LONGITUDE = 72.8777;
const B_LATITUDE = 19.088207;
const R_LATITUDE = 19.090000;
const B_LONGITUDE = 72.882854;
const R_LONGITUDE = 72.882854;
const GOOGLE_MAPS_API_KEY = '';

// Define hardcoded refreshment markers along the path
const refreshmentMarkers = [
  { latitude: 19.078, longitude: 72.879, title: 'Refreshment 1' },
  { latitude: 19.080, longitude: 72.880, title: 'Refreshment 2' },
  { latitude: 19.082, longitude: 72.881, title: 'Refreshment 3' },
  { latitude: 19.084, longitude: 72.882, title: 'Refreshment 4' },
  { latitude: 19.086, longitude: 72.883, title: 'Refreshment 5' },
];
const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: MUMBAI_LATITUDE,
          longitude: MUMBAI_LONGITUDE,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: MUMBAI_LATITUDE, longitude: MUMBAI_LONGITUDE }} title="Source" >
          <Image
            source={require('../assets/source.png')}
            style={{ height: 50, width: 50 }} />
        </Marker>
        <Marker coordinate={{ latitude: B_LATITUDE, longitude: B_LONGITUDE }} title="Destination" >
          <Image
            source={require('../assets/destination.png')}
            style={{ height: 50, width: 50 }} />
        </Marker>
        <Marker coordinate={{ latitude: R_LATITUDE, longitude: R_LONGITUDE }} title="Runner" >
          <Image
            source={require('../assets/runner.png')}
            style={{ height: 50, width: 50 }} />
        </Marker>
        <MapViewDirections
          origin={{ latitude: MUMBAI_LATITUDE, longitude: MUMBAI_LONGITUDE }}
          destination={{ latitude: B_LATITUDE, longitude: B_LONGITUDE }}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />

        {/* Render the hardcoded refreshment markers with custom icons */}
        {refreshmentMarkers.map((marker, index) => (
          // <Marker
          //   key={index}
          //   coordinate={marker}
          //   title={marker.title}
          //   style={{ width: 5, height: 5 }} // Adjust the size of the icon as needed
          // >
          //   <Image
          //     source={require('../assets/refreshment-icon.png')}
          //     resizeMode="contain"
          //     style={{ width: 25, height: 25 }}
          //   />
          // </Marker>

          <Marker
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude
            }}
            title={marker.title}
          >
            <Image
              source={require('../assets/refreshment-icon.png')}
              style={{ height: 30, width: 30 }} />

          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
