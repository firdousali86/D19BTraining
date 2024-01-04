import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FunAndClass, FirstAssignment, Details } from './src/components/master/Index';
import { Button } from 'react-native-elements';
import { View } from 'react-native';
import { DrawerNavigator } from './src/navigate/drawer'
import Navigation from './src/navigate';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigate';
import {LogBox} from 'react-native';
import ErrorBoundary from './src/components/ErrorBoundary';

function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();

  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ErrorBoundary>
  );

}

export default App;
