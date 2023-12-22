/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Button, StyleSheet, ScrollView} from 'react-native';

import TestClassComponent from './src/components/ClassComponents/TestClassComponent';
import UserProfileClassComponent from './src/components/ClassComponents/UserProfileClassComponent';
import MyFirstClassComponent from './src/components/ClassComponents/MyFirstClassComponent';

import TestFunctionalComponent from './src/components/FunctionalComponent/TestFunctionalComponent';
import UserProfileFunctionalComponent from './src/components/FunctionalComponent/UserProfileFunctionalComponent';

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
    university: 'SCET',
  },
};

function App() {
  const [parentBGColor, setParentBGColor] = useState('yellow');

  return (
    <SafeAreaView style={style.flex}>
      <ScrollView style={style.flex}>
        <TestClassComponent />
        <MyFirstClassComponent />

        {/* <UserProfileClassComponent userObject={userObject} /> */}
        <UserProfileFunctionalComponent userObject={userObject} />
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
