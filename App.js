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
        <TestClassComponent />
        <TestFunctionalComponent />
      </View>
    </SafeAreaView>
  );
}

export default App;
