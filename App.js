import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './src/components/master/layouts/Screens';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { SetLoginContext } from './src/components/master/contextApi/LoginContext';
function App() {

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  const [isLogin, setIsLogin] = useState('');
  return (
    <SetLoginContext isLogin={isLogin} setIsLogin={setIsLogin} >
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SetLoginContext>
  );
}

export default App;
