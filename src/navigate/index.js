import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  LoginScreen,
  SignupScreen,
  ModalScreen,
  DrawerScreen,
  TestPureComponent,
  ImageBackgroundScreen,
  FastImageScreen,
  PropDrillingPractice
} from '../containers';

import { Text, View } from 'react-native';
import { Helper } from '../helper';
import PersistanceHelper from '../helper/PersistanceHelper';

const Stack = createNativeStackNavigator();


const Navigation = () => {

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name={'PropDrillingPractice'} component={PropDrillingPractice} />
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Screen name={'TestPureComponent'} component={TestPureComponent} />
    );
  };

  return <Stack.Navigator>{getAuthStack()}</Stack.Navigator>;
};

export default Navigation;
