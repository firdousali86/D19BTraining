import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { DetailsComponent ,UserProfileClassComponent,UserFunComponent,SimpleForm} from '../navigation_project';

const Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SimpleForm}
       options={screenOptions}
      />

      <Stack.Screen
        name="Details"
        component={DetailsComponent}
        options={screenOptions}
      />
      <Stack.Screen options={screenOptions} name="classUser" component={UserProfileClassComponent} />
      <Stack.Screen options={screenOptions} name="functionalComponent" component={UserFunComponent} />
    </Stack.Navigator>
  );
};


const screenOptions = {
  headerStyle: {
    backgroundColor: '#4285f4', // Background color for the header
  },
  headerTitleStyle: {
    color: '#fff', // Text color for the header title
    fontSize: 20,   // Font size for the header title
  },
  headerTitleAlign: 'center', // Alignment for the header title
};



export default Screens;
