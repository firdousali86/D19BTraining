/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Button, StyleSheet} from 'react-native';

import TestClassComponent from './src/components/ClassComponents/TestClassComponent';
import TestFunctionalComponent from './src/components/TestFunctionalComponent';
import UserProfileClassComponent from './src/components/ClassComponents/UserProfileClassComponent';
import MyFirstClassComponent from './src/components/ClassComponents/MyFirstClassComponent';

const userObject = {
  basicInfo: {
    firstName: 'Prakash',
    lastName: 'Malviya',
    gender: 'Male',
    DOB: 'Jan 1',
  },
  contactInfo: {
    cell: '9898989898',
    email: 'prakash@tes.om',
    address: '123 street',
    city: 'Ahd',
    country: 'Ind',
  },
  educationInfo: {
    lastDegree: 'MS',
    university: 'Scet',
  },
};

function App() {
  const [parentBGColor, setParentBGColor] = useState('yellow');

  return (
    <SafeAreaView style={style.flex}>
      <View style={style.flex}>
        <MyFirstClassComponent />

        <UserProfileClassComponent userObject={userObject} />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
