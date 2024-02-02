import React, { useEffect, useState } from 'react';
import IconF from 'react-native-vector-icons/FontAwesome';
import { Avatar, Badge, withBadge } from 'react-native-elements';

import {
  FunAndClass,
  FirstAssignment,
  FirstAssignmentStack,
  FunAndClassStack,
  AuthStack,
  Details,
  TabScreen,
  Login,
  SignUp,
  FastImage,
  Async,
  MmkvStorage,
  PropDrillingPractice,
  Setting,
  SettingTab1,
  SettingTab2,
  SettingTab3,
  RLogin,
  RSignUp,
  Products,
  Cart,
  ProductClass,
  ClassCart,
  FirebaseSignUp,
} from '../Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import Icon from 'react-native-vector-icons/FontAwesome';
import KeyChain from '../../practices/key_chain/KeyChain';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Screens = props => {
  const navigation = useNavigation();
  const totalCartItems = useSelector(state => state.cart.totalCartItems);

  function CustomHeader() {
    const totalCartItems = useSelector(state => state.cart.totalCartItems);

    return (
      <TouchableOpacity
        style={[styles.cartButton, { marginTop: 10 }]}
        onPress={() => navigation.navigate('Cart')}>
        <View>
          <Badge
            status="primary"
            value={totalCartItems}
            containerStyle={{ position: 'absolute', top: -7, right: 0 }}
          />
          <IconF name="cart-plus" size={30} color="#000000" />
        </View>
      </TouchableOpacity>
    );
  }

  function MyDrawers() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Settings">
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  // console.log(route);

                  if (route.name === 'Products') {
                    iconName = focused ? 'th-list' : 'th-list';
                  } else if (route.name === '1 TS') {
                    iconName = focused ? 'users' : 'copy';
                  } else if (route.name === '2 TS') {
                    iconName = focused ? 'profile' : 'profile';
                  } else if (route.name === 'Theme') {
                    iconName = focused ? 'player-settings' : 'player-settings';
                  }

                  // You can return any component that you like here!
                  return <Icon name={iconName} size={size} color={color} />;
                  // <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })}>
              <Tab.Screen
                name="Products"
                options={{ headerRight: () => <CustomHeader /> }}>
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen
                      name={'Product Lists'}
                      options={{ headerShown: false }}
                      component={Products}></Stack.Screen>
                    <Stack.Screen
                      options={{ headerShown: false }}
                      name={'Cart'}
                      component={Cart}
                    />
                  </Stack.Navigator>
                )}
              </Tab.Screen>

              <Tab.Screen
                name="Products Class"
                options={{ headerRight: () => <CustomHeader /> }}>
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen
                      name={'Product Lists Class'}
                      options={{ headerShown: false }}
                      component={ProductClass}></Stack.Screen>
                    <Stack.Screen
                      options={{ headerShown: false }}
                      name={'ClassCart'}
                      component={ClassCart}
                    />
                  </Stack.Navigator>
                )}
              </Tab.Screen>

              <Tab.Screen name="1 TS" component={SettingTab1} />
              <Tab.Screen name="2 TS" component={SettingTab2} />
              <Tab.Screen name="Theme" component={SettingTab3} />
            </Tab.Navigator>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Fast Image" component={FastImage} />
        <Drawer.Screen name="MMKV Storage" component={MmkvStorage} />
        <Drawer.Screen name="Key Chain">
          {() => (<Stack.Navigator>
            <Stack.Screen
              name={'KeyChainPage'}
              options={{ headerShown: false }}
              component={KeyChain}></Stack.Screen>
          </Stack.Navigator>)}
        </Drawer.Screen>
      </Drawer.Navigator>
    );
  }

  const ReduxAuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={'Redux Login'} component={RLogin}></Stack.Screen>
        <Stack.Screen name={'Redux Signup'} component={RSignUp} />
      </Stack.Navigator>
    );
  };

  //return (isLogin == true) ? MyDrawers() : AuthStack();
  return true ? MyDrawers() : ReduxAuthStack();
};
const styles = StyleSheet.create({
  cartButton: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeContainer: {
    backgroundColor: '#fd0707',
    paddingHorizontal: 8,
    borderRadius: 50,
    marginRight: 5,
  },
  badgeText: {
    color: 'white',
  },
  cartIcon: {
    color: 'white',
    fontSize: 20,
  },
});
export default Screens;
