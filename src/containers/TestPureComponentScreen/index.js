import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState, useEffect, useCallback, useMemo} from 'react';
import SampleClassComp from './SampleClassComp';
import SampleFunctComp from './SampleFunctComp';
import {PersistanceHelper} from '../../helpers';
import {EventRegister} from 'react-native-event-listeners';
import {useUserContext} from '../../contexts/UserContext';

const expensiveCalculation = num => {
  console.log('Calculating...');

  for (let i = 0; i < 1000; i++) {
    num += 1;
  }

  return num;
};

const TestPureComponentScreen = props => {
  const {
    actions: {setIsUserLoggedIn},
  } = useUserContext();

  const [textInput, setTextInput] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [datetime, setdatetime] = useState(undefined);
  const [count2, setCount2] = useState(0);
  const [newCalcVal, setNewCalcVal] = useState(0);

  useEffect(() => {
    PersistanceHelper.getObject('testObject')
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });

    return () => {
      console.log('test pure component screen unmounted');
    };
  }, []);

  useEffect(() => {
    const anotherExpensive = expensiveCalculation(count2);
    setNewCalcVal(anotherExpensive);
  }, [count2]);

  const increment = () => {
    setCount2(c => c + 1);
  };

  console.log('parent comp got rerendered');

  const buttonHandler = useCallback(() => {
    console.log('funcitonal component button was tapped');
  }, []);

  let count = 0;

  // const calculation = useMemo(() => expensiveCalculation(count2), [count2]);

  return (
    <View>
      <SampleClassComp
        enteredText={textInput}
        anotherEnteredText={textInput2}
      />
      <SampleFunctComp enteredText={textInput2} buttonHandler={buttonHandler} />

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
          // PersistanceHelper.setValue('userEmail', '');
          // EventRegister.emit('logoutEvent');
          setIsUserLoggedIn(false);
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

      <Text>{count2}</Text>

      <Text>{newCalcVal}</Text>
      <Button
        title={'Increment Expensive Calc'}
        onPress={() => {
          increment();
        }}
      />
    </View>
  );
};

export default TestPureComponentScreen;

const styles = StyleSheet.create({});
