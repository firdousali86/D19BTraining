import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FunAndClass, FirstAssignment} from './src/components/master/Index';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstAssignment} />
        <Stack.Screen name="Home" component={FunAndClass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
