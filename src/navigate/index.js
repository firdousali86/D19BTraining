import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import React from 'react';

import {
  DashboardScreen,
  SettingsScreen,
  TestHOCScreen,
  TestFlexScreen,
  ListScreen,
  DetailsScreen,
  TypeScriptTestScreen,
  LoginScreen,
  SignupScreen,
  TestModalScreen,
  TestPureComponentScreen,
} from '../containers';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const Navigation = () => {
  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Auth" component={getAuthStack} />
        <Tab.Screen name="Main" component={getMainStack} />
      </Tab.Navigator>
    );
  }

  const getAuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={'Login'} component={LoginScreen}></Stack.Screen>
        <Stack.Screen name={'Signup'} component={SignupScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="TestPureComponentScreen"
          component={TestPureComponentScreen}
        />
        <Stack.Screen name="TestModalScreen" component={TestModalScreen} />
        <Stack.Screen
          name="TypeScriptTestScreen"
          component={TypeScriptTestScreen}
        />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="TestFlexScreen" component={TestFlexScreen} />

        <Stack.Screen name="TestHOCScreen" component={TestHOCScreen} />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          initialParams={{city: 'London', country: 'UK'}}
        />
      </Stack.Group>
    );
  };

  // return MyTabs();
  return <Stack.Navigator>{getMainStack()}</Stack.Navigator>;
};

export default Navigation;
