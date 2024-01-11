import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './src/components/master/layouts/Screens';
import ReduxScreens from './src/components/master/layouts/ReduxScreens';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { SetLoginContext } from './src/components/master/contextApi/LoginContext';
import { ThemeContext } from './src/components/master/contextApi/SettingContextApi';
import { Store, store } from './src/components/practices/redux/store';
import { Provider } from 'react-redux';
function App() {

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  const [isLogin, setIsLogin] = useState('');
  return (
    <Provider store={store}>
      <ThemeContext>
        <SetLoginContext isLogin={isLogin} setIsLogin={setIsLogin} >
          <NavigationContainer>
            <ReduxScreens />
            {/* <Screens /> */}
          </NavigationContainer>
        </SetLoginContext>
      </ThemeContext>
    </Provider>
  );
}

export default App;
