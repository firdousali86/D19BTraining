/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Test
 * Test
 * Second Commit from VS
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/components/all_screens/Screens';
import MainScreen from './src/Fusion/Screens/MainScreen';
import Store from './src/components/store/Store';
import {Provider} from 'react-redux';

function App() {
    return (
    // ----mix screen
    <Provider store={Store}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </Provider>

// --- Fusion ----
      // <NavigationContainer>
      //   <MainScreen />
      // </NavigationContainer>

  );
}

export default App;
