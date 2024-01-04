import React, {useCallback, useState} from 'react';
import TestClassComponent from './TestClassComponent';
import TestFunctionalComponent from './TestFuncationalComponent';
import {View, TextInput, Button,Text} from 'react-native';



const PureComponent = () => {
  const [getTextValue, setTextValue] = useState();
  const [getTextTwoValue, setTextTwoValue] = useState();
  const [count2, setCount] = useState(0);
  console.log('parents');

const Calculation = num => {
  console.log('cal.......');
  for (let i = 0; i < 10000000000, i++; ) {
    num += 1;
  }
  console.log(num)
  return num;
};

  const ButtonHandler = useCallback(() => {
    console.log(' button was tapped ');
  }, []);

  const Calculation2 = Calculation(count2);

  return (
    <View style={{borderBottomWidth: 1, marginBottom: 12}}>
      <TextInput
        style={{backgroundColor: 'gray', borderRadius: 10, padding: 10}}
        value={getTextValue}
        placeholder="one class"
        onChangeText={nn => {
          setTextValue(nn);
        }}
      />
      <TextInput
        style={{backgroundColor: 'gray', borderRadius: 10, padding: 10}}
        value={getTextTwoValue}
        placeholder="two fun"
        onChangeText={mm => {
          setTextTwoValue(mm);
        }}
      />
      <TestClassComponent enterText={getTextValue} />
      <TestFunctionalComponent
        enterTExtTwo={getTextTwoValue}
        buttonHandler={ButtonHandler}
      />

      <Text>count: -------------- {count2}</Text>
      <Text>count: -------------- {Calculation2}</Text>
      <Button
        title="calculation"
        onPress={num => {
          setCount(num + 1);
        }}
      />
    </View>
  );
};

export default PureComponent;
