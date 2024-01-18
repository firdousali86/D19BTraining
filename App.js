/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigate';
import {LogBox, Text, View} from 'react-native';
import ErrorBoundary from './src/components/ErrorBoundary';
import {store, persistor} from './src/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {DataHelper} from './src/helpers';

// import {UserContextProvider} from './src/contexts/UserContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();

  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // console.log(isUserLoggedIn);

  useEffect(() => {
    if (store && !isLoading) {
      DataHelper.setStore(store);
    }
  }, [isLoading]);

  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        onBeforeLift={() => {
          console.log('store is loaded');
          // DataHelper.setStore(store);

          setIsLoading(false);
        }}>
        <ErrorBoundary>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
          )}
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

export default App;
