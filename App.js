import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './src/components/master/layouts/Screens';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { AsyncStorageHelper } from './src/components/master/Helper';

function App() {

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  AsyncStorageHelper.logInDataSet('This data is store.')

  return (

    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
}

export default App;
