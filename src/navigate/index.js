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
} from '../containers';

import { Text, View } from 'react-native';
import { Helper } from '../helper';
import PersistanceHelper from '../helper/PersistanceHelper';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(async () => {
    const userEmail = await PersistanceHelper.getData('userEmail');
    setIsUserLoggedIn(userEmail && userEmail.length > 0 !== undefined ? true : false);
  });
  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name={'Login'} component={LoginScreen} />
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
