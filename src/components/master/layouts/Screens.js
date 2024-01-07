import React, { useEffect, useState } from 'react';
import {
    FunAndClass, FirstAssignment, Details, TabScreen, Login, SignUp, FastImage, Async, MmkvStorage, PropDrillingPractice, Setting, SettingTab1, SettingTab2, SettingTab3
} from '../Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AsyncStorageHelper } from '../Helper';
import { EventRegister } from 'react-native-event-listeners';
import { getLoginContext } from '../contextApi/LoginContext';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Screens = props => {

    const { states: { isLogin }, actions: { setIsLogin } } = getLoginContext();
    // const [is_login, setIsLogin] = useState(false);
    // useEffect(async () => {

    //     console.log(is_login);
    //     const loginData = await AsyncStorageHelper.getData('user-login');

    //     setIsLogin((loginData?.email).length > 0 ? true : false)

    //     // if (loginData != '') {
    //     //     setIsLogin(true);
    //     // }
    //     EventRegister.addEventListener('loginEvent', (userData) => {
    //         console.log(userData);
    //         AsyncStorageHelper.setData('user-login', userData);
    //         setIsLogin(true);

    //     })
    //     EventRegister.addEventListener('logoutEvent', () => {
    //         AsyncStorageHelper.setData('user-login', '');
    //         setIsLogin(false);
    //     })
    // }, []);

    useEffect(() => {
        const fetchData = async () => {

            const loginData = await AsyncStorageHelper.getData('user-login');
            setIsLogin(loginData && loginData.email && loginData.email.length > 0);

            EventRegister.addEventListener('loginEvent', (userData) => {
                console.log(userData);
                AsyncStorageHelper.setData('user-login', userData);
                setIsLogin(true);
            });

            // EventRegister.addEventListener('logoutEvent', () => {
            //     AsyncStorageHelper.setData('user-login', '');
            //     setIsLogin(false);
            // });
        };

        fetchData();

    }, []);
    function CustomHeader({ navigation }) {
                return (

            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {
                
                AsyncStorageHelper.setData('user-login','');
                setIsLogin(false) }} >
                <Text>Logout</Text>
            </TouchableOpacity>
        );
    }

    function MyDrawers() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name='Settings' options={{ headerRight: () => <CustomHeader />, }}>
                    {() => (
                        <Tab.Navigator>
                            <Tab.Screen name="1 Assignment" component={FirstAssignmentStack} />
                            <Tab.Screen name="F & C" component={FunAndClassStack} />
                            <Tab.Screen name="Auth" component={AuthStack} />
                            <Tab.Screen name="1 TS" component={SettingTab1} />
                            <Tab.Screen name="2 TS" component={SettingTab2} />
                            <Tab.Screen name="Theme" component={SettingTab3} />
                        </Tab.Navigator>
                    )}
                </Drawer.Screen>
                
                <Drawer.Screen name="Prop Drilling" component={PropDrillingPractice} />
                <Drawer.Screen name="MMKV Storage" component={MmkvStorage} />
                <Drawer.Screen name="Async Storage" component={Async} />
                <Drawer.Screen name="Fast Image" component={FastImage} />
            </Drawer.Navigator>
        );
    }


    function MyTabs() {
        return (<Tab.Navigator>
            <Tab.Screen name="1 Assignment" component={FirstAssignmentStack} />
            <Tab.Screen name="F & C" component={FunAndClassStack} />
            <Tab.Screen name="Auth" component={AuthStack} />
        </Tab.Navigator>);
    }

    const AuthStack = () => {
        return (<Stack.Navigator>
            <Stack.Screen name={'Login'} component={Login}></Stack.Screen>
            <Stack.Screen name={'Signup'} component={SignUp} />
        </Stack.Navigator>);
    };

    const mainStack = () => {
        return (<Stack.Navigator>
            <Stack.Screen name="Home" component={FunAndClass} />
        </Stack.Navigator>);
    };
    const FirstAssignmentStack = () => {
        return (<Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="First" component={FirstAssignment} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>);
    };

    const FunAndClassStack = () => {
        return (<Stack.Navigator>
            <Stack.Screen name="Home" component={FunAndClass} />
        </Stack.Navigator>);
    };

    return (isLogin == true) ? MyDrawers() : AuthStack();

};

export default Screens;
