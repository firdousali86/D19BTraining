import React from 'react';
import {} from 'react-native';
import {
  DetailsComponent,
  UserProfileClassComponent,
  UserFunComponent,
  SimpleForm,
} from '../navigation_project';

import PureComponent from '../pureComponent';
import ModalComponentTab from '../modal/Modal';
import FastImageExample from '../fast_image/FastImage';
import AsyncStorage from '../async_storage/AsyncStorage';
import MMkV from '../mmkv/MMKV';
import {TestColorContextProvider} from '../setting/SettingContextApi';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PropsDrilling from '../props_driling/PropsDrilling';
import Setting from '../setting/Setting';
import TestApi from '../api_practise/TestApi';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Screens = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#4285f4',
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 20,
    },
    headerTitleAlign: 'center',
  };

  const MainPage = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={screenOptions}
          name="Home"
          component={SimpleForm}
        />
        <Stack.Screen
          options={screenOptions}
          name="Details"
          component={DetailsComponent}
        />
      </Stack.Navigator>
    );
  };

  const TestDrawer = () => {
    return (
      <TestColorContextProvider>
        <Drawer.Navigator>
          <Drawer.Screen name="TestApi" component={TestApi} />
          <Drawer.Screen name="Setting" component={Setting} />
          <Drawer.Screen name="props drilling" component={PropsDrilling} />
          <Drawer.Screen name="re rendering" component={PureComponent} />
          <Drawer.Screen name="MMKV Storage" component={MMkV} />
          <Drawer.Screen name="Async Storage" component={AsyncStorage} />
          <Drawer.Screen name="Fast Image" component={FastImageExample} />
          <Drawer.Screen name="Modal" component={ModalComponentTab} />
        </Drawer.Navigator>
      </TestColorContextProvider>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="other"
        component={TestDrawer}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Test"
        component={MainPage}
      />
      <Tab.Screen
        options={screenOptions}
        name="class"
        component={UserProfileClassComponent}
      />
      <Tab.Screen
        options={screenOptions}
        name="functional"
        component={UserFunComponent}
      />
    </Tab.Navigator>
  );
};

export default Screens;
