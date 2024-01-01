import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import SampleClassComp from './SampleClassComp';
import SampleFunctComp from './SampleFunctComp';
import {PersistanceHelper} from '../../helpers';
import {EventRegister} from 'react-native-event-listeners';

const TestPureComponentScreen = props => {
  useEffect(() => {
    return () => {
      console.log('test pure component screen unmounted');
    };
  }, []);

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

      <Button
        title={'test tab in navigator'}
        onPress={() => {
          props.navigation.navigate('TabScreenAsNavigator');
        }}
      />
      <Button
        title={'push a class component'}
        onPress={() => {
          props.navigation.navigate('ClassCompForUnmount');
        }}
      />

      <Button
        title={'logout'}
        onPress={() => {
          PersistanceHelper.setValue('userEmail', '');
          EventRegister.emit('logoutEvent');
        }}
      />
    </View>
  );
};

export default TestPureComponentScreen;

const styles = StyleSheet.create({});
