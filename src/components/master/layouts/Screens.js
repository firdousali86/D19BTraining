import React, { useEffect, useState } from 'react';
import { FunAndClass, FirstAssignment, Details, TabScreen, Login, SignUp, FastImage, Async, MmkvStorage, propDrillingPractice } from '../Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AsyncStorageHelper } from '../Helper';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Screens = props => {

    const [is_login, setIsLogin] = useState(false);
    useEffect(async () => {
        try {
            const loginData = await AsyncStorageHelper.getData('data');

            console.log('loginData');
            console.log(loginData);
        } catch (e) {
            console.log(e);
        }

    }, []);

    function MyDrawers() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Prop Drilling" component={propDrillingPractice} />
                <Drawer.Screen name="MMKV Storage" component={MmkvStorage} />
                <Drawer.Screen name="Async Storage" component={Async} />
                <Drawer.Screen name="Fast Image" component={FastImage} />
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
                <Stack.Screen name={'Login'} component={Login}></Stack.Screen>
                <Stack.Screen name={'Signup'} component={SignUp} />
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

    return AuthStack();
    // return <Stack.Navigator>{MyTabs()}</Stack.Navigator>;
};

export default Screens;
