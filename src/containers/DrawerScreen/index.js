import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Setting from './Setting';
import Dashboard from '../Dashboard';
import { UserContextProvider } from '../../contexts/UserContext';
import { useUserContext } from '../../contexts/UserContext';
const Drawer = createDrawerNavigator();


function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const DrawerScreen = () => {
  return (
    <UserContextProvider>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
        <Drawer.Screen name="Setting" component={Setting} />

      </Drawer.Navigator>
    </UserContextProvider>
  );
};
export default DrawerScreen;
