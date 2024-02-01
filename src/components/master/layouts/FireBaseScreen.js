import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FireBaseSignUp, FireBaseSignIn, FusionDashBoard} from '../Index';
import auth from '@react-native-firebase/auth';
import { Text, TouchableOpacity } from 'react-native';

const FirebaseScreen = props => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const [isLogin, setIsLogin] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState('');
  // Handle user state changes
  const onAuthStateChanged = user => {
    console.log(' -- AUTH STATE CHANGE -- ');
    console.log(user);
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  function CustomHeader({ navigation }) {
    return (

        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {

            AsyncStorageHelper.setData('user-login', '');
            setIsLogin(false)
        }} >
            <Text>Logout</Text>
        </TouchableOpacity>
    );
}

  function FirebaseAuthStack() {
    return (
      <Stack.Navigator>
       
        <Stack.Screen
          name={'FireBase Login'}
          options={{headerShown: false,headerBackTitleVisible: false}}
          component={FireBaseSignIn}></Stack.Screen>
           <Stack.Screen
          name={'FireBase Register'}
          options={{headerShown: false}}
          component={FireBaseSignUp}></Stack.Screen>
      </Stack.Navigator>
    );
  }

  function DashboardStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={'Dashboard'}
          options={{ headerRight: () => <CustomHeader /> }}
          component={FusionDashBoard}></Stack.Screen>
      </Stack.Navigator>
    );
  }

  return ((user != null && user != '') && !initializing ) ? DashboardStack() : FirebaseAuthStack();
};

export default FirebaseScreen;
