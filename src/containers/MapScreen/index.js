import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapControl from '../../components/MapControl';

const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapControl />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
