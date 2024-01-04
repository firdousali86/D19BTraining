import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/navigate';
import { storage } from './src/helper/mmkv';
import PersistanceHelper from './src/helper/PersistanceHelper';

function App() {

  storage.set('username', 'Naresh Malaviya');
  // PersistanceHelper.setValue('test@test.com');
  //console.log(PersistanceHelper.getData());
  console.log(storage.getString('username'));

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;