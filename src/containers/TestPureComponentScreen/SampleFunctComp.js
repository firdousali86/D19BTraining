import {View, Text} from 'react-native';
import React from 'react';

const SampleFunctComp = () => {
  console.log('child func comp rerendered');

  return (
    <View>
      <Text>this is very simple functional comp</Text>
    </View>
  );
};

export default SampleFunctComp;
