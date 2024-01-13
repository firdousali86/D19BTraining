import React, { useEffect, useState } from 'react';
import {
    FunAndClass, FirstAssignment, FirstAssignmentStack, FunAndClassStack, AuthStack, Details, TabScreen, Login, SignUp, FastImage, Async, MmkvStorage, PropDrillingPractice, Setting, SettingTab1, SettingTab2, SettingTab3
    , RLogin, RSignUp, Products, Cart,
} from '../Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Screens = props => {

    function MyDrawers() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name='Settings'>
                    {() => (
                        <Tab.Navigator>
                            <Tab.Screen name="Products" >
                                {() => (
                                    <Stack.Navigator>
                                        <Stack.Screen name={'Products'} component={Products}></Stack.Screen>
                                        <Stack.Screen name={'Cart'} component={Cart} />
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

export default Screens;
