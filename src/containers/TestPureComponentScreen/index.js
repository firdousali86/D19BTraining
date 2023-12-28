import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import SampleClassComp from './SampleClassComp';
import SampleFunctComp from './SampleFunctComp';

const TestPureComponentScreen = () => {
  const [textInput, setTextInput] = useState('');
  const [textInput2, setTextInput2] = useState('');

  console.log('parent comp got rerendered');

  return (
    <View>
      <SampleClassComp enteredText={textInput} />
      <SampleFunctComp enteredText={textInput2} />

      <TextInput
        value={textInput}
        onChangeText={ct => {
          setTextInput(ct);
        }}
        placeholder="some text"
        style={{backgroundColor: 'grey', margin: 5}}
      />
      <TextInput
        value={textInput2}
        onChangeText={ct => {
          setTextInput2(ct);
        }}
        placeholder="some text"
        style={{backgroundColor: 'grey', margin: 5}}
      />
    </View>
  );
};

export default TestPureComponentScreen;

const styles = StyleSheet.create({});
