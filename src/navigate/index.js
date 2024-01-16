import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {EventRegister} from 'react-native-event-listeners';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import React, {useState, useEffect} from 'react';

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
  TestPureComponentScreen,
  ClassCompForUnmount,
  PropDrillingPractice,
  TestAPIListScreen,
  TestRedux,
  ProductList,
  CartScreen,
  ProductListClass,
} from '../containers';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PersistanceHelper} from '../helpers';
import {useUserContext} from '../contexts/UserContext';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart} from '../features/cart/cartSlice';

const Tab = createBottomTabNavigator();

const Navigation = props => {
  const user = useSelector(state => state.user.data);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    user?.email ? true : false,
  );

  // const {
  //   state: {isUserLoggedIn},
  // } = useUserContext();

  useEffect(() => {
    // const userEmail = await PersistanceHelper.getValue('userEmail');
    // setIsUserLoggedIn(userEmail && userEmail.length > 0 ? true : false);
    // EventRegister.addEventListener('loginEvent', email => {
    //   PersistanceHelper.setValue('userEmail', email);
    //   setIsUserLoggedIn(true);
    // });
    // EventRegister.addEventListener('logoutEvent', () => {
    //   PersistanceHelper.setValue('userEmail', '');
    //   setIsUserLoggedIn(false);
    // });
  }, []);

  useEffect(() => {
    setIsUserLoggedIn(user?.email ? true : false);
  }, [user]);

  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={ListScreen} />
        <Drawer.Screen name="Article" component={TestFlexScreen} />
      </Drawer.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Auth" component={LoginScreen} />
        <Tab.Screen name="Main" component={TestHOCScreen} />
      </Tab.Navigator>
    );
  }

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name={'Login'} component={LoginScreen}></Stack.Screen>
        <Stack.Screen name={'Signup'} component={SignupScreen}></Stack.Screen>
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{
            title: 'Shopping List',
            headerRight: () => {
              return (
                <Button
                  title="Cart"
                  onPress={() => {
                    navigation.navigate('CartScreen');
                  }}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="ProductListClass"
          component={ProductListClass}
          options={{
            title: 'Shopping List Class',
            headerRight: () => {
              return (
                <Button
                  title="Cart"
                  onPress={() => {
                    navigation.navigate('CartScreen');
                  }}
                />
              );
            },
          }}
        />

        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            title: 'Shopping Cart',
            headerRight: () => {
              return (
                <Button
                  title="Clear Cart"
                  onPress={() => {
                    dispatch(clearCart());
                  }}
                />
              );
            },
          }}
        />

        <Stack.Screen name="TestRedux" component={TestRedux} />
        <Stack.Screen name="TestAPIListScreen" component={TestAPIListScreen} />
        <Stack.Screen
          name="TestPureComponentScreen"
          component={TestPureComponentScreen}
        />
        <Stack.Screen
          name="PropDrillingPractice"
          component={PropDrillingPractice}
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
          initialParams={{city: 'London', country: 'UK'}}
        />
      </Stack.Group>
    );
  };

  // return MyDrawer();
  // return MyTabs();
  return (
    <Stack.Navigator>
      {isUserLoggedIn ? getMainStack() : getAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigation;
