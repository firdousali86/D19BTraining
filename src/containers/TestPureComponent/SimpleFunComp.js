import React, {memo} from 'react';
import {Text, View} from 'react-native';

const SimpleFunComp = props => {
  console.log('Render Function Component');
  const {textValue} = props;
  return (
    <View>
      <Text>Simple Function Component</Text>
      <Text>{textValue}</Text>
    </View>
  );
};

export default memo(SimpleFunComp);
