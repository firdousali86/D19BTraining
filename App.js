/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import TestClassComponent from './src/components/TestClassComponent';
import TestFunctionalComponent from './src/components/TestFunctionalComponent';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <TestClassComponent
          myfirstprops={'this is prop value'}
          mynumber={12345678}
          mydata={['blue', 'green', 'red', 'white']}
        />
        <TestFunctionalComponent />
      </View>
    </SafeAreaView>
  );
}

export default App;
