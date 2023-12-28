import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import SimpleClassComp from './SimpleClassComp';
import SimpleFunComp from './SimpleFunComp';
const TestPureComponent = () => {
  const [classInput, setClassInput] = useState('');
  const [functionInput, setFunctionInput] = useState('');
  console.log('Parent Component  Render');

  return (
    <View>
      <SimpleClassComp textValue={classInput} />
      <SimpleFunComp textValue={functionInput} />
      <Text style={{marginTop: 15}}>Enter Class Component Value</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          value={classInput}
          placeholder="Class Component Text"
          onChangeText={ct => {
            setClassInput(ct);
          }}
          style={{
            height: 40,
            width: 250,
            borderColor: '#dddd',
            borderRadius: 5,
            borderWidth: 2,
            backgroundColor: '#fff',
          }}
        />
      </View>

      <Text style={{marginTop: 15}}>Enter Function Component Value</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          value={functionInput}
          placeholder="Function Component Text"
          onChangeText={ct => {
            setFunctionInput(ct);
          }}
          style={{
            height: 40,
            width: 250,
            borderColor: '#dddd',
            borderRadius: 5,
            borderWidth: 2,
            backgroundColor: '#fff',
          }}
        />
      </View>
    </View>
  );
};
export default TestPureComponent;
