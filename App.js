import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTab from './src/components/TabNavigation/Tab';
import MyDrawer from './src/components/Drawer/Drawer';
import TypeScript from './src/components/TypeScript/TypeScript';


export default function App() {
  return (
    <NavigationContainer>
      <TypeScript />
    </NavigationContainer>
  );
}
