import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

import HeaderView from './HeaderView';
import BodyView from './BodyView';

const userObject = {
  firstName: 'Firdous',
  lastName: 'Ali',
  age: 35,
  gender: 'male',
  address: 'some area',
  phone: 'xxxxxxxx',
  city: 'Karachi',
  country: 'Pakistan',
  email: 'dfdf@sdfdf.dd',
  degree: 'BE',
  university: 'NEDUET',
  favCars: [
    {brand: 'Cultus', model: '2019', color: 'Silver'},
    {brand: 'Passo', model: '2020', color: 'Black'},
    {brand: 'Cuore', model: '2012', color: 'White'},
    {brand: 'Civic', model: '2022', color: 'White'},
    {brand: 'Corolla', model: '2023', color: 'Red'},
  ],
};

const PropDrillingPractice = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderView userObject={userObject} style={{backgroundColor: 'red'}} />
      <BodyView userObject={userObject} />
    </View>
  );
};

export default PropDrillingPractice;

const styles = StyleSheet.create({});
