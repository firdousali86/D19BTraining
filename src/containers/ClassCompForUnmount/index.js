import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class ClassCompForUnmount extends Component {
  componentWillUnmount() {
    console.log('unmount called');
  }

  render() {
    return (
      <View>
        <Text>index</Text>
      </View>
    );
  }
}

export default ClassCompForUnmount;
