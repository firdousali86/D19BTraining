/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';

import TestClassComponent from './src/components/ClassComponents/TestClassComponent';
import TestFunctionalComponent from './src/components/TestFunctionalComponent';
import UserProfileClassComponent from './src/components/ClassComponents/UserProfileClassComponent';

import UserInfoComponent from './src/components/Component/UserProfileComponent';

const userObject = {
  basicInfo: {
    firstName: 't',
    lastName: 'boss',
    gender: 'Male',
    DOB: 'Dec 3',
  },
  contactInfo: {
    cell: '123456789',
    email: 'ntboss@gmail.com',
    address: '123 street',
    city: 'AH',
    country: 'Bharat',
  },
  educationInfo: {
    lastDegree: 'MS',
    university: 'NEDUET',
  },
};

function App() {
  const [parentBGColor, setParentBGColor] = useState('yellow');

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View style={{flex: 1}}>
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
      </View> */}
      <View style={{flex: 1}}>
        <Text style={styles.head}>Functional Component</Text>
        <UserInfoComponent userObject={userObject} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head: {
    paddingVertical: 10,
    marginVertical: 10,
    fontSize: 20,
    color: '#1e90ff',
    backgroundColor: '#add8e6',
    textAlign: 'center',
    fontWeight: 'bold',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: '#483d8b',
  },
});

export default App;
