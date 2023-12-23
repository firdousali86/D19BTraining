/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DashboardScreen, SettingsScreen, TestHOCScreen} from './src/containers';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="TestHOCScreen" component={TestHOCScreen} />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          initialParams={{city: 'London', country: 'UK'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
