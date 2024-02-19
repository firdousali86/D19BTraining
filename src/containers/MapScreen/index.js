import {StyleSheet, Text, View, Alert, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapControl from '../../components/MapControl';
import {LocationHelper} from '../../helpers';

const MapScreen = () => {
  const [trail, setTrail] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    LocationHelper.trackUserLocation(
      locationData => {
        // const newArray = [...trail];
        // newArray.push(locationData);
        // // trail.push(locationData);

        // setTrail(newArray);

        setTrail(prevTrail => {
          return [...prevTrail, locationData];
        });
      },
      errorData => {
        console.log(errorData);
      },
    );
  }, []);

  // useEffect(() => {
  //   console.log(locationtrack);
  // }, [locationtrack]);

  console.log(trail);

  return (
    <View style={{flex: 1}}>
      <MapControl data={trail} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
