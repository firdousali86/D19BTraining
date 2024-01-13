import React, { useEffect, useState } from 'react';
import {
    FunAndClass, FirstAssignment, FirstAssignmentStack, FunAndClassStack, AuthStack, Details, TabScreen, Login, SignUp, FastImage, Async, MmkvStorage, PropDrillingPractice, Setting, SettingTab1, SettingTab2, SettingTab3
    , RLogin, RSignUp, Products, Cart,
} from '../Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, TouchableOpacity,StyleSheet,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

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
            style={styles.cartButton}
            onPress={() => navigation.navigate('Cart')}
          >
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{totalCartItems}</Text>
            </View>
            <Text style={styles.cartIcon}>🛒</Text>
          </TouchableOpacity>
        );
      }

    function MyDrawers() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name='Settings'>
                    {() => (
                        <Tab.Navigator>
                            <Tab.Screen name="Products" options={{ headerRight: () => <CustomHeader /> }} >
                                {() => (
                                    <Stack.Navigator>
                                        <Stack.Screen name={'Product Lists'} options={{ headerShown: false }} component={Products}></Stack.Screen>
                                        <Stack.Screen options={{ headerShown: false }} name={'Cart'} component={Cart} />
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
    return (true) ? MyDrawers() : ReduxAuthStack();

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
