import React from 'react';
import {Text, Button, View} from 'react-native';

const TestFunctionalComponent = () => {
  return (
    <View>
      <Text>this is my first functional component</Text>
      <Button
        title="Functional Button"
        onPress={() => {
          console.log('functional buttton was tapped');
        }}
      />
    </View>
  );
};

export default TestFunctionalComponent;
