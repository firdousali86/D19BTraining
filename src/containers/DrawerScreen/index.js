import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Setting from './Setting';
import Dashboard from '../Dashboard';
import PropDrillingPractice from '../PropDrillingPractice';
import FastImage from '../FastImage';
import ImageBackgroundScreen from '../ImageBackground/index';
import ModalScreen from '../ModalScreen';
import TestPureComponent from '../TestPureComponent';

import { useUserContext } from '../../contexts/UserContext';
const Drawer = createDrawerNavigator();


const DrawerScreen = () => {
  const { state, actions } = useUserContext();
  let setIsUserLoggedIn = actions.setIsUserLoggedIn;

  return (

    <Drawer.Navigator initialRouteName="Dashboard" drawerContent={props => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Logout" onPress={() => setIsUserLoggedIn(false)} />
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="PropDrillingPractice" component={PropDrillingPractice} />
      <Drawer.Screen name="FastImage" component={FastImage} />
      <Drawer.Screen name="ImageBackgroundScreen" component={ImageBackgroundScreen} />
      <Drawer.Screen name="ModalScreen" component={ModalScreen} />
      <Drawer.Screen name="TestPureComponent" component={TestPureComponent} />
      <Drawer.Screen name="Setting" component={Setting} />

    </Drawer.Navigator>

  );
};
export default DrawerScreen;
