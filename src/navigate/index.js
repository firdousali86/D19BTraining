import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
const Tab = createBottomTabNavigator();
import {
    DashboardScreen,
    SettingsScreen,
    TestHOCScreen,
    TestFlexScreen,
    ListScreen,
    DetailsScreen,
    TypeScriptTestScreen,
    LoginScreen,
    SignupScreen,
    TestModalScreen,
} from '../containers';
import DrawerNavigator from '../navigate/drawer'

const Navigation = () => {
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
            <Stack.Navigator>
                <Stack.Screen name={'Login'} component={LoginScreen}></Stack.Screen>
                {/* <Stack.Screen name={'Signup'} component={SignupScreen}></Stack.Screen> */}
            </Stack.Navigator>
        );
    };

    const GetMainStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="TestModalScreen" component={TestModalScreen} />
                {/* <Stack.Screen
                    name="TypeScriptTestScreen"
                    component={TypeScriptTestScreen}
                /> */}
                {/* <Stack.Screen name="ListScreen" component={ListScreen} />
                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
                <Stack.Screen name="TestFlexScreen" component={TestFlexScreen} />

                <Stack.Screen name="TestHOCScreen" component={TestHOCScreen} />

                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    initialParams={{ city: 'London', country: 'UK' }}
                /> */}
            </Stack.Navigator>
        );
    };

    return MyDrawer();
    return <Stack.Navigator>{MyTabs()}</Stack.Navigator>;
};

export default Navigation;