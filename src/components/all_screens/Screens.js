import React, {useEffect, useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {
  DetailsComponent,
  UserProfileClassComponent,
  UserFunComponent,
  SimpleForm,
} from '../navigation_project';

import PureComponent from '../pureComponent';
import ModalComponentTab from '../modal/Modal';
import FastImageExample from '../fast_image/FastImage';
import AsyncStorage from '../async_storage/AsyncStorage';
import MMkV from '../mmkv/MMKV';
import {TestColorContextProvider} from '../setting/SettingContextApi';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PropsDrilling from '../props_driling/PropsDrilling';
import Setting from '../setting/Setting';
import TestApi from '../api_practise/TestApi';
import ReduxTest from '../redux_test/ReduxTest';
import ProductList from '../redux_cart/productList';
import CartView from '../redux_cart/cartView';
import LogInComponent from '../log_in/Fusion';
import SignUp from '../log_in/SignUp';
import auth from '@react-native-firebase/auth';

import {RectButton} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Screens = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#4285f4',
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 20,
    },
    headerTitleAlign: 'center',
  };

  const MainPage = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={screenOptions}
          name="Home"
          component={SimpleForm}
        />
        <Stack.Screen
          options={screenOptions}
          name="Details"
          component={DetailsComponent}
        />
      </Stack.Navigator>
    );
  };
  const MyCart = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{...screenOptions, headerShown: false}}
          name="ProductList"
          component={ProductList}
        />
        <Stack.Screen
          options={{...screenOptions, headerShown: false}}
          name="CartView"
          component={CartView}
        />
      </Stack.Navigator>
    );
  };

  const CustomHeader = () => {

    const  authLOgOut = () => {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    }

    return (
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingRight: 16}}>
        <TouchableOpacity onPress={() => authLOgOut() }>
          <Text style={{color: 'red', fontSize: 16, marginLeft: 16}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const TestDrawer = () => {
    return (
      <TestColorContextProvider>
        <Drawer.Navigator>
          <Drawer.Screen
            name="productPage"
            options={{ headerRight: CustomHeader  }}
            component={MyCart}
          />
          <Drawer.Screen name="redux test" component={ReduxTest} />
          <Drawer.Screen name="TestApi" component={TestApi} />
          <Drawer.Screen name="Setting" component={Setting} />
          <Drawer.Screen name="props drilling" component={PropsDrilling} />
          <Drawer.Screen name="re rendering" component={PureComponent} />
          <Drawer.Screen name="MMKV Storage" component={MMkV} />
          <Drawer.Screen name="Async Storage" component={AsyncStorage} />
          <Drawer.Screen name="Fast Image" component={FastImageExample} />
          <Drawer.Screen name="Modal" component={ModalComponentTab} />
        </Drawer.Navigator>
      </TestColorContextProvider>
    );
  };

  const Login = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{...screenOptions, headerShown: false}}
          name="Log In"
          component={LogInComponent}
        />
        <Stack.Screen
          options={{...screenOptions}}
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    );
  };

  // const user = useSelector(state => state.user.data);
  // const [isUserLogin, setUserLogin] = useState(user?.email ? false : true);
  // console.log(user);

  // useEffect(() => {
  //   if (user?.email) {
  //     setUserLogin(false);
  //   } else {
  //     setUserLogin(true);
  //   }
  // }, [user]);

  const [initializing, setInitializing] = useState(true);
  const [userFire, setUser] = useState();

  console.log(userFire);
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="other"
        // component={isUserLogin ? Login : TestDrawer}
        component={
          userFire != null && userFire != '' && !initializing
            ? TestDrawer
            : Login
        }
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Test"
        component={MainPage}
      />
      <Tab.Screen
        options={screenOptions}
        name="class"
        component={UserProfileClassComponent}
      />
      <Tab.Screen
        options={screenOptions}
        name="functional"
        component={UserFunComponent}
      />
    </Tab.Navigator>
  );
};

export default Screens;
