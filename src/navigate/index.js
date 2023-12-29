import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  LoginScreen,
  SignupScreen,
  ModalScreen,
  DrawerScreen,
  TestPureComponent,
  ImageBackgroundScreen,
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
      <Stack.Screen
        name={'ImageBackgroundScreen'}
        component={ImageBackgroundScreen}
      />
    );
  };

  return <Stack.Navigator>{getMainStack()}</Stack.Navigator>;
};

export default Navigation;
