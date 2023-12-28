import React from 'react';
import { FunAndClass, FirstAssignment, Details, Tab } from '../Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const Screens = props => {
    const authStack = () => {
        return (
            <Stack.Group>
                <Stack.Screen
                    name={'Login'}
                    component={() => (
                        <View>
                            <Text>[AUTH] . This is a Login Stack</Text>
                        </View>
                    )}>
                </Stack.Screen>
                <Stack.Screen
                    name={'Signup'}
                    component={() => (
                        <View>
                            <Text>This is a Signup stack</Text>
                        </View>
                    )}></Stack.Screen>
            </Stack.Group>
        );
    };

    const mainStack = () => {
        return (
            <Stack.Group>
                <Stack.Screen name="FD" component={Tab} />
                <Stack.Screen name="First" component={FirstAssignment} />
                <Stack.Screen name="Home" component={FunAndClass} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Group>
        );
    };
    return <Stack.Navigator>{authStack()}</Stack.Navigator>;
};

export default Screens;
