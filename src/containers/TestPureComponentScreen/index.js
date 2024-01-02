import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
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
  const [datetime, setdatetime] = useState(undefined);

  console.log('parent comp got rerendered');

  const buttonHandler = useCallback(() => {
    console.log('funcitonal component button was tapped');
  }, []);

  let count = 0;

  return (
    <View>
      <SampleClassComp
        enteredText={textInput}
        anotherEnteredText={textInput2}
      />
      <SampleFunctComp
        enteredText={textInput2}
        anotherEnteredText={textInput}
        buttonHandler={buttonHandler}
      />

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

      <Button
        title={'Increment'}
        onPress={() => {
          setdatetime(Date.now());
          count = count + 1;
          console.log(count);
        }}
      />
    </View>
  );
};

export default TestPureComponentScreen;

const styles = StyleSheet.create({});
