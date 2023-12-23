/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, ScrollView} from 'react-native';

import TestClassComponent from './src/components/ClassComponents/TestClassComponent';
import TestFunctionalComponent from './src/components/FunctionalComponents/TestFunctionalComponent';
import UserProfileClassComponent from './src/components/ClassComponents/UserProfileClassComponent';
import UserProfileFunctionalComponent from './src/components/FunctionalComponents/UserProfileFunctionalComponent';
import TestCoreComponents from './src/components/FunctionalComponents/TestCoreComponents';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const userObject = {
  basicInfo: {
    firstName: 'Firdous',
    lastName: 'Ali',
    gender: 'Male',
    DOB: 'Dec 3',
  },
  contactInfo: {
    cell: '123456789',
    email: 'firdous@firdous.com',
    address: '123 street',
    city: 'Karachi',
    country: 'Pakistan',
  },
  educationInfo: {
    lastDegree: 'MS',
    university: 'NEDUET',
  },
};

function DashboardScreen(props) {
  const [parentBGColor, setParentBGColor] = useState('yellow');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
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
        <Button
          title={'Goto settings'}
          onPress={() => {
            props.navigation.navigate('Settings');
          }}
        />
        <UserProfileClassComponent userObject={userObject} />
        <UserProfileFunctionalComponent userObject={userObject} />
        <TestCoreComponents />
      </ScrollView>
    </SafeAreaView>
  );
}

function SettingsScreen(props) {
  return (
    <View>
      <Text>this is very simple settings screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
