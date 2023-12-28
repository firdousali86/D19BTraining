import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    TestModalScreen,
    LoginScreen
} from '../../containers';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Login = (params) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Login'} component={LoginScreen}></Stack.Screen>
            {/* <Stack.Screen name={'Signup'} component={SignupScreen}></Stack.Screen> */}
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={TestModalScreen} />
            <Drawer.Screen name="Notifications" component={Login} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;

