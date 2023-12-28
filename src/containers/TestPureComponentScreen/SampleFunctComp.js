import {View, Text} from 'react-native';
import React, {memo, useEffect} from 'react';

const SampleFunctComp = props => {
  console.log('child func comp rerendered');

  useEffect(() => {
    console.log('componentdidmount of child func component');
  }, []);

  useEffect(() => {
    console.log('entered text has changed');

    return () => {
      //
    };
  }, [props.enteredText]);

  return (
    <View>
      <Text>this is very simple functional comp</Text>
    </View>
  );
};

export default SampleFunctComp;
