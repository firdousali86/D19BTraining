import React from 'react';
import {View,Text} from 'react-native';
import SecondStep from './SecoundStep';

const FirstStep = () => {

  console.log('FirstStep screen')

  return (
    <View>
      <Text> first Step </Text>
      <SecondStep />
    </View>
  );
};

export default FirstStep;
