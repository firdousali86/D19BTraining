import React from 'react';
import { FunAndClass, FirstAssignment, Details, TabScreen, Login, SignUp } from '../Index';
import { View, Text } from 'react-native';
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
                <Drawer.Screen name="Feed" component={SignUp} />
                <Drawer.Screen name="Article" component={Login} />
            </Drawer.Navigator>
        );
    }


    function MyTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="1 Assignment" component={FirstAssignmentStack} />
                <Tab.Screen name="F & C" component={FunAndClassStack} />
                <Tab.Screen name="Auth" component={AuthStack} />
            </Tab.Navigator>
        );
    }

    const AuthStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name={'Signup'} component={SignUp}>
                </Stack.Screen>
                <Stack.Screen
                    name={'Login'} component={Login}>
                </Stack.Screen>
            </Stack.Navigator>
        );
    };

    const mainStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={FunAndClass} />
            </Stack.Navigator>
        );
    };
    const FirstAssignmentStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="First" component={FirstAssignment} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        );
    };

    const FunAndClassStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={FunAndClass} />
            </Stack.Navigator>
        );
    };

    return MyDrawers();
    // return <Stack.Navigator>{MyTabs()}</Stack.Navigator>;
};

export default Screens;