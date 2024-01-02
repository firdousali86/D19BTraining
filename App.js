/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
