import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import React from 'react';

import {
  DashboardScreen,
  SettingsScreen,
  TestHOCScreen,
  TestFlexScreen,
  ListScreen,
  DetailsScreen,
  TypeScriptTestScreen,
} from '../containers';
import {Text, View} from 'react-native';

const Navigation = () => {
  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name={'Login'}
          component={() => (
            <View>
              <Text>this is login screen</Text>
            </View>
          )}></Stack.Screen>
        <Stack.Screen
          name={'Signup'}
          component={() => (
            <View>
              <Text>this is signup screen</Text>
            </View>
          )}></Stack.Screen>
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
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
          initialParams={{city: 'London', country: 'UK'}}
        />
      </Stack.Group>
    );
  };

  return <Stack.Navigator>{getAuthStack()}</Stack.Navigator>;
};

export default Navigation;
