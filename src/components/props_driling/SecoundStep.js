import React, { useState, useEffect, memo } from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SecondStep = () => {
  console.log('last screen')
  const [drillingData, setDrillingData] = useState('');

  const getDataValue = async () => {
    try {
      const data = await AsyncStorage.getItem('drilling');
      setDrillingData(data || ''); 
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useEffect(() => {
    getDataValue(); 
  },[setDrillingData]);

  return (
    <View style={{borderTopWidth: 1, backgroundColor: 'gray'}}>
      <Text>12</Text>
      <Text>{drillingData}</Text>
    </View>
  );
};

export default memo(SecondStep);
