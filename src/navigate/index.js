import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
const Tab = createBottomTabNavigator();
import {
    LoginScreen,
    TestModalScreen,
    SignupScreen,
    TestPureComponentScreen
} from '../containers';
import DrawerNavigator from '../navigate/drawer'
import { EventRegister } from 'react-native-event-listeners';
import { PersistanceHelper } from '../helpers';

const Navigation = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(async () => {
        const userEmail = await PersistanceHelper.getValue('userEmail');
        console.log(userEmail);
        setIsUserLoggedIn(userEmail && userEmail.length > 0 ? true : false);

        EventRegister.addEventListener('loginEvent', email => {
            PersistanceHelper.setValue('userEmail', email);
            setIsUserLoggedIn(true);
        });

        EventRegister.addEventListener('logoutEvent', () => {
            PersistanceHelper.setValue('userEmail', '');
            setIsUserLoggedIn(false);
        });

    }, []);

    function MyDrawer() {
        return (
            <DrawerNavigator />
        );
    }

    function MyTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={GetAuthStack} />
                <Tab.Screen name="Setting" component={GetMainStack} />
            </Tab.Navigator>
        );
    }

    const GetAuthStack = () => {
        return (
            <Stack.Group>
                <Stack.Screen name={'Login'} component={LoginScreen}></Stack.Screen>
                <Stack.Screen name={'Signup'} component={SignupScreen}></Stack.Screen>
            </Stack.Group>
        );
    };

    const GetMainStack = () => {
        return (
            <Stack.Group>
                <Stack.Screen
                    name="TestPureComponentScreen"
                    component={TestPureComponentScreen}
                />

                <Stack.Screen
                    name="ClassCompForUnmount"
                    component={ClassCompForUnmount}
                />

                <Stack.Screen name="TestModalScreen" component={TestModalScreen} />
                <Stack.Screen
                    name="TypeScriptTestScreen"
                    component={TypeScriptTestScreen}
                />
                <Stack.Screen name="ListScreen" component={ListScreen} />
                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
                <Stack.Screen name="TestFlexScreen" component={TestFlexScreen} />
                <Stack.Screen name="TestHOCScreen" component={TestHOCScreen} />
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    initialParams={{ city: 'London', country: 'UK' }}
                />
            </Stack.Group>
        );
    };

    //return MyTabs();
    return (
        <Stack.Navigator>
            {isUserLoggedIn ? GetMainStack() : GetAuthStack()}
        </Stack.Navigator>
    );
};

export default Navigation;