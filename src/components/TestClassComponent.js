import React from 'react';
import {Text, Button, View} from 'react-native';

class TestClassComponent extends React.Component {
  render() {
    return (
      <View>
        <Text>this is my first class component</Text>
        <Button
          title="Class Button"
          onPress={() => {
            console.log('button was clicked');
          }}
        />
      </View>
    );
  }
}

export default TestClassComponent;
