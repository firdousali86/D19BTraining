/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/components/all_screens/Screens';

function App() {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
}

export default App;
