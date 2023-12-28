import React, {useState} from 'react';
import {Text, Button, View} from 'react-native';

const TestFunctionalComponent = () => {
  const [bgColor, setBGColor] = useState('white');

  return (
    <View style={{backgroundColor: bgColor}}>
      <Text>this is my first functional component</Text>
      <Button
        title="Functional Button"
        onPress={() => {
          console.log('functional buttton was tapped');
        }}
      />
      <Button
        title={'change color to red'}
        onPress={() => {
          setBGColor('red');
        }}
      />
      <Button
        title={'change color to blue'}
        onPress={() => {
          setBGColor('blue');
        }}
      />
    </View>
  );
};

export default TestFunctionalComponent;
