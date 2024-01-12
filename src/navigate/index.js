import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {EventRegister} from 'react-native-event-listeners';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import React, {useState, useEffect} from 'react';

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
  PropDrillingPractice,
  TestAPIListScreen,
  TestRedux,
  ProductList,
  CartScreen,
} from '../containers';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PersistanceHelper} from '../helpers';
import {useUserContext} from '../contexts/UserContext';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // const {
  //   state: {isUserLoggedIn},
  // } = useUserContext();

  useEffect(() => {
    // const userEmail = await PersistanceHelper.getValue('userEmail');
    // setIsUserLoggedIn(userEmail && userEmail.length > 0 ? true : false);
    // EventRegister.addEventListener('loginEvent', email => {
    //   PersistanceHelper.setValue('userEmail', email);
    //   setIsUserLoggedIn(true);
    // });
    // EventRegister.addEventListener('logoutEvent', () => {
    //   PersistanceHelper.setValue('userEmail', '');
    //   setIsUserLoggedIn(false);
    // });
  }, []);

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
      <Stack.Group>
        <Stack.Screen name={'Login'} component={LoginScreen}></Stack.Screen>
        <Stack.Screen name={'Signup'} component={SignupScreen}></Stack.Screen>
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="CartScreen" component={CartScreen} />

        <Stack.Screen name="TestRedux" component={TestRedux} />
        <Stack.Screen name="TestAPIListScreen" component={TestAPIListScreen} />
        <Stack.Screen
          name="TestPureComponentScreen"
          component={TestPureComponentScreen}
        />
        <Stack.Screen
          name="PropDrillingPractice"
          component={PropDrillingPractice}
        />
        <Stack.Screen
          name="ClassCompForUnmount"
          component={ClassCompForUnmount}
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

  // return MyDrawer();
  // return MyTabs();
  return (
    <Stack.Navigator>{true ? getMainStack() : getAuthStack()}</Stack.Navigator>
  );
};

export default Navigation;
