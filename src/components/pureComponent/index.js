import React, {useState} from 'react';
import TestClassComponent from './TestClassComponent';
import TestFunctionalComponent from './TestFuncationalComponent';
import {View, TextInput} from 'react-native';

const PureComponent = () => {
  const [getTextValue, setTextValue] = useState();
  const [getTextTwoValue, setTextTwoValue] = useState();
  console.log('parents');
  return (
    <View>
      <TextInput
        style={{backgroundColor: 'gray', borderRadius: 10, padding: 10}}
        value={getTextValue}
        placeholder='one class'
        onChangeText={nn => {
          setTextValue(nn);
        }}
      />
      <TextInput
        style={{backgroundColor: 'gray', borderRadius: 10, padding: 10}}
        value={getTextTwoValue}
        placeholder='two fun'
        onChangeText={mm => {
          setTextTwoValue(mm);
        }}
      />
      <TestClassComponent enterText={getTextValue} />
      <TestFunctionalComponent  enterTExtTwo={getTextTwoValue}
       
      />
    </View>
  );
};

export default PureComponent;
