/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigate';
import {LogBox} from 'react-native';
import ErrorBoundary from './src/components/ErrorBoundary';
import {store} from './src/store';
import {Provider} from 'react-redux';
// import {UserContextProvider} from './src/contexts/UserContext';

function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();

  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // console.log(isUserLoggedIn);

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
