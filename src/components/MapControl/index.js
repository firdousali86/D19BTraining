import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import React, {useRef, useEffect} from 'react';
import MapView, {
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Marker,
  Callout,
} from 'react-native-maps';

const mylocations = [
  {lat: 15.826609, lon: -89.648438, title: 'location 1'},
  {lat: 17.570721, lon: -90.788269, title: 'location 2'},
  {lat: 17.368989, lon: -95.394287, title: 'location 3'},
];

const MapControl = props => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (props.data.length > 0) {
      const lastPoint = props.data[props.data.length - 1];

      mapRef.current.animateToRegion({
        latitude: lastPoint.coords.latitude,
        longitude: lastPoint.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      });
    }
  }, [props.data]);

  const myimplementationofanimatetoregion = () => {
    console.log('is my method calling?');
    // mapRef.current.animateToRegion({
    //   latitude: 0, //my home coords
    //   longitude: 0, //myhome corrds
    //   latitudeDelta: 0.015,
    //   longitudeDelta: 0.0121,
    // });
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {props.data.map(thisEl => {
          return (
            <Marker
              draggable
              title={thisEl.title}
              coordinate={{
                latitude: thisEl.coords.latitude,
                longitude: thisEl.coords.longitude,
              }}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 20,
                  backgroundColor: 'blue',
                }}>
                <Text>Test</Text>
              </View>
              <Callout>
                <View>
                  <Text>{thisEl.title}</Text>
                  <Text style={{backgroundColor: 'red'}}>test</Text>
                  <Image
                    resizeMode={'center'}
                    style={{width: 60, height: 40}}
                    source={{
                      uri: 'https://www.thedrive.com/uploads/2022/04/24/NGAD-F22.jpg',
                    }}
                  />
                </View>
              </Callout>
            </Marker>
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
