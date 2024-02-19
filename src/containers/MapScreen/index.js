import {StyleSheet, Text, View, Alert, Button} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import MapControl from '../../components/MapControl';
import {LocationHelper} from '../../helpers';

const MapScreen = () => {
  const [trail, setTrail] = useState([]);
  const [count, setCount] = useState(0);
  const myCustomMapRef = useRef(0);

  useEffect(() => {
    LocationHelper.trackUserLocation(
      locationData => {
        setTrail(prevTrail => {
          return [...prevTrail, locationData];
        });
      },
      errorData => {
        console.log(errorData);
      },
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapControl ref={myCustomMapRef} data={trail} />
      <Button
        title={'take me to home'}
        onPress={() => {
          //animatetoregion take to my home
          myCustomMapRef.current.myimplementationofanimatetoregion();
        }}></Button>
      <View style={{height: 100}}></View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
