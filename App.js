import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/components/master/layouts/Screens';
import ReduxScreens from './src/components/master/layouts/ReduxScreens';
import FireBaseScreen from './src/components/master/layouts/FireBaseScreen';
import 'react-native-gesture-handler';
import {LogBox, Text, View} from 'react-native';
import {SetLoginContext} from './src/components/master/contextApi/LoginContext';
import {ThemeContext} from './src/components/master/contextApi/SettingContextApi';
import {Store, store} from './src/components/practices/redux/store';
import {Provider} from 'react-redux';
import Toast, {
  BaseToast,
  ErrorToast,
  SuccessToast,
} from 'react-native-toast-message';
const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  // style={{ borderLeftColor: '#FE6301' }}
  //<BaseToast style={{ borderLeftColor: '#87CEFA' }} {...props}/>
  // <BaseToast style={{ borderLeftColor: '#69C779' }} {...props}/>

  error: props => (
    <ErrorToast
      {...props}
      contentContainerStyle={{paddingHorizontal: 5, paddingVertical: 5}}
      text1NumberOfLines={15}
    />
  ),

  success: props => (
    <SuccessToast
      {...props}
      contentContainerStyle={{paddingHorizontal: 5, paddingVertical: 5}}
      text1NumberOfLines={15}
    />
  ),

  // success: (props) => (
  //   <BaseToast
  //     {...props}
  //     style={{ borderLeftColor: 'pink' }}
  //     contentContainerStyle={{ paddingHorizontal: 15 }}
  //     text1Style={{
  //       fontSize: 15,
  //       fontWeight: '400'
  //     }}
  //   />
  // ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  // error: (props) => (
  //   <ErrorToast
  //     {...props}
  //     text1Style={{
  //       fontSize: 17
  //     }}
  //     text2Style={{
  //       fontSize: 15
  //     }}
  //   />
  // ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  // tomatoToast: ({ text1, props }) => (
  //   <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
  //     <Text>{text1}</Text>
  //     <Text>{props.uuid}</Text>
  //   </View>
  // )
};

function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  const [isLogin, setIsLogin] = useState('');
  return (
    <>
      <Provider store={store}>
        <ThemeContext>
          <SetLoginContext isLogin={isLogin} setIsLogin={setIsLogin}>
            <NavigationContainer>
              <FireBaseScreen />
              {/* <ReduxScreens /> */}
              {/* <Screens /> */}
            </NavigationContainer>
          </SetLoginContext>
        </ThemeContext>
      </Provider>

      <Toast config={toastConfig} />
    </>
  );
}

export default App;
