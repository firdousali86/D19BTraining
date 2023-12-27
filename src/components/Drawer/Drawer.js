import {StyleSheet, Text, View, TextInput,Image} from 'react-native';
import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();



const Drawer = () => {
    return (
    
        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />

        </Tab.Navigator>
      
      );

};
export default Drawer;