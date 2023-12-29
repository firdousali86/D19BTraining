import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
  ClassCompForUnmount,
} from '../containers';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const Navigation = () => {
  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={ListScreen} />
        <Drawer.Screen name="Article" component={TestFlexScreen} />
      </Drawer.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Auth" component={LoginScreen} />
        <Tab.Screen name="Main" component={TestHOCScreen} />
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

        <Stack.Screen
          name="ClassCompForUnmount"
          component={ClassCompForUnmount}
        />
        <Stack.Screen name="TabScreenAsNavigator" component={MyTabs} />
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

  // return MyDrawer();
  // return MyTabs();
  return <Stack.Navigator>{getMainStack()}</Stack.Navigator>;
};

export default Navigation;
