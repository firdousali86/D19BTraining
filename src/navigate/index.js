import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  LoginScreen,
  SignupScreen,
  ModalScreen
} from '../containers';

import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  
  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name={'Login'} component={LoginScreen} />
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
        <Stack.Screen name={'ModalScreen'} component={ModalScreen} />
    );
  };

  return <Stack.Navigator>{getAuthStack()}</Stack.Navigator>;
};

export default Navigation;