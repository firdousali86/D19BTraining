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
} from '../containers';

const Navigation = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default Navigation;
