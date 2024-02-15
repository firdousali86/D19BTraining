import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';
import MapView, {
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Marker,
} from 'react-native-maps';

const mylocations = [
  {lat: 15.826609, lon: -89.648438, title: 'location 1'},
  {lat: 17.570721, lon: -90.788269, title: 'location 2'},
  {lat: 17.368989, lon: -95.394287, title: 'location 3'},
];

const MapControl = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {mylocations.map(thisEl => {
          return (
            <Marker
              draggable
              title={thisEl.title}
              coordinate={{
                latitude: thisEl.lat,
                longitude: thisEl.lon,
              }}></Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MapControl;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
