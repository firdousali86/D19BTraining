import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LogIn, SignUp, DashBoard} from '../Layout/Index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const ScreenOptions = {
  headerStyle: {
    backgroundColor: '#4285f4',
  },
  headerTitleStyle: {
    color: '#fff',
    fontSize: 20,
  },
  headerTitleAlign: 'center',
};

const LogInSignUpScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Log in"
        options={{headerShown: false}}
        component={LogIn}
      />
      <Stack.Screen name="Sign Up" options={ScreenOptions} component={SignUp} />
    </Stack.Navigator>
  );
};

const CustomHeader = () => {
  const authLOgOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', paddingRight: 16}}>
      <TouchableOpacity onPress={() => authLOgOut()}>
        <Text style={{color: 'red', fontSize: 16, marginLeft: 16}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const MainScreen = () => {
  const [initializing, setInitializing] = useState(true);
  const [userFire, setUserFire] = useState();

  console.log(userFire);
  function onAuthStateChanged(user) {
    setUserFire(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const AfterLogin = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Dashoard"
          options={{headerRight: CustomHeader}}
          component={DashBoard}
        />
      </Stack.Navigator>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Fusion"
        options={{headerShown: false}}
        component={
          userFire != null && userFire != '' && !initializing
            ? AfterLogin
            : LogInSignUpScreens
        }
      />
    </Stack.Navigator>
  );
};

export default MainScreen;
