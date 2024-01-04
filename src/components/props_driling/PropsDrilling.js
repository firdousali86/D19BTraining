import React, {memo, useState} from 'react';
import {View, Text, Button} from 'react-native';
import FirstStep from './FirstStep';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PropsDrilling = () => {
  const [drillingValue, setDrillingValue] = useState();
  console.log('main screen')
  const StoreValue = async () => {
    try {
      AsyncStorage.setItem('drilling', drillingValue);
      console.log('Data stored successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style="flex:1">
      <Text>top</Text>
      <TextInput
        placeholder="please Enter"
        onChangeText={nk => {
          setDrillingValue(nk);
        }}
      />
      <Button title="click store" onPress={StoreValue} />

      <FirstStep />
    </View>
  );
};

export default memo(PropsDrilling);
