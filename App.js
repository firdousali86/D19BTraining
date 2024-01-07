import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './src/components/master/layouts/Screens';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { SetLoginContext } from './src/components/master/contextApi/LoginContext';
import { ThemeContext } from './src/components/master/contextApi/SettingContextApi';

function App() {

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  const [isLogin, setIsLogin] = useState('');
  return (
    <ThemeContext>
      <SetLoginContext isLogin={isLogin} setIsLogin={setIsLogin} >
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </SetLoginContext>
    </ThemeContext>
  );
}

export default App;
