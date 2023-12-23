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

import DashboardScreen from './src/containers/DashboardScreen';
import SettingsScreen from './src/containers/SettingsScreen';

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
