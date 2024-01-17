import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { UserContextProvider } from './src/contexts/UserContext';

import Navigation from './src/navigate';
import { storage } from './src/helper/mmkv';
import { store } from './src/store'
import { Provider } from 'react-redux'
import PersistanceHelper from './src/helper/PersistanceHelper';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  storage.set('username', 'Naresh Malaviya');
  // PersistanceHelper.setValue('test@test.com');
  //console.log(PersistanceHelper.getData());
  // console.log(storage.getString('username'));

  return (
    <Provider store={store}>
      <UserContextProvider isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </UserContextProvider>
    </Provider>
  );
}

export default App;