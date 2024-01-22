import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  LoginScreen,
  SignupScreen,
  ModalScreen,
  DrawerScreen,
  TestPureComponent,
  ImageBackgroundScreen,
  FastImageScreen,
  PropDrillingPractice,
  Dashboard,
  Api,
  Counter,
  ProductList,
  CartScreen
} from '../containers';

import { Text, View } from 'react-native';
import { Helper } from '../helper';
import PersistanceHelper from '../helper/PersistanceHelper';
import { useUserContext } from '../contexts/UserContext';

const Stack = createNativeStackNavigator();


const Navigation = () => {


  const { state, actions } = useUserContext();
  let isUserLoggedIn = state.isUserLoggedIn;
  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen options={{ title: 'Login' }} name={'LoginScreen'} component={LoginScreen} />
      </Stack.Group>
    );

  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen options={{ headerShown: false }} name={'DrawerScreen'} component={DrawerScreen} />
      </Stack.Group>
    );
  };

  return <Stack.Navigator>{isUserLoggedIn ? getMainStack() : getAuthStack()}</Stack.Navigator>;
};

export default Navigation;
