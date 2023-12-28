import React from "react";
import { FunAndClass, FirstAssignment, Details, Tab } from '../Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Screens = (props) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='FD' component={Tab} />
            <Stack.Screen name="First" component={FirstAssignment} />
            <Stack.Screen name="Home" component={FunAndClass} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}

export default Screens;