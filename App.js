/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

import TestClassComponent from './src/components/ClassComponents/TestClassComponent';
import TestFunctionalComponent from './src/components/TestFunctionalComponent';
import UserProfileClassComponent from './src/components/ClassComponents/UserProfileClassComponent';

const userObject = {
  basicInfo: {
    firstName: 'Naresh',
    lastName: 'Malaviya',
    gender: 'Male',
    DOB: 'Nov 18',
  },
  contactInfo: {
    cell: '123456789',
    email: 'naresh@gmail.com',
    address: '856 jivanvadi',
    city: 'AHmedabd',
    country: 'India',
  },
  educationInfo: {
    lastDegree: 'MCA',
    university: 'Gujrat University',
  },
};

function App() {
  const [parentBGColor, setParentBGColor] = useState('yellow');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <TestClassComponent
          bgColor={parentBGColor}
          myfirstprops={'this is prop value'}
          mynumber={12345678}
          mydata={['blue', 'green', 'red', 'white']}
        />
        <TestFunctionalComponent />

        <Button
          title="Change to black"
          onPress={() => {
            setParentBGColor('black');
          }}
        />
        <Button
          title="Change to grey"
          onPress={() => {
            setParentBGColor('grey');
          }}
        />
        <UserProfileClassComponent userObject={userObject} />
      </View>
    </SafeAreaView>
  );
}

export default App;
