import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/stack';
import Login from './src/components/LoginScreen/Login';
import Signup from './src/components/FunctionalComponents/SignUpScreen/Signup';

const Stack = createNativeStackNavigator ();
const GetAuthScreen = () =>{
  return(
    <Stack.Group>
        <Stack.screen name={'Login'} component={Login}></Stack.screen>
        <Stack.screen name={'Signup'} component={Signup}></Stack.screen>
    </Stack.Group>
  );
}

const MainStack = () => {
  return(
    <Stack.Group>
        <Stack.screen name={'Signup'} ></Stack.screen>
    </Stack.Group>
  );
}


export default function App() {


  return (
    <NavigationContainer>
      {GetAuthScreen()}
    </NavigationContainer>
  );
}
