import React, { useState } from "react";
import { Text, TextInput, Alert, View } from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageHelper } from "../../master/Helper";
import { EventRegister } from "react-native-event-listeners";
import { getLoginContext } from "../../master/contextApi/LoginContext";

const Async = props => {

    const [email, setEmail] = useState('');
    const [u_password, setUPassword] = useState('');
    const { actions: { setIsLogin } } = getLoginContext();

    const isButtonDisabled = !email || !u_password;

    const storeData = async (user) => {
        try {
            console.log('set', user);
            AsyncStorage.setItem('userData', user);
        } catch (e) {
            console.error(e);
        }
    };

    const getData = async (key) => {
        try {
            console.log('get');
            const userData = await AsyncStorage.getItem('userData');
            console.log(userData);

        } catch (e) {
            console.error(e);
        }
    };

    return (
        <View style={{ flex: 1, marginHorizontal: 10, marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ padding: 5, width: '30%', }}>email</Text>
                <TextInput
                    placeholder="Email"
                    style={{ backgroundColor: '#FFFFFF', padding: 5, width: '70%' }}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                <Text style={{ padding: 5, width: '30%', }}>password</Text>
                <TextInput
                    placeholder="Password"
                    style={{ backgroundColor: '#FFFFFF', padding: 5, width: '70%' }}
                    onChangeText={(text) => setUPassword(text)}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                    buttonStyle={{ width: 60, backgroundColor: '#d3be00', margin: 10 }}
                    title={'set'}
                    onPress={() => {
                        const dataToStore = { email, u_password };
                        storeData(JSON.stringify(dataToStore));
                    }}
                    disabled={isButtonDisabled}  // Disable the button if either email or u_password is empty
                />
                <Button
                    onPress={() => {
                        const dataToStore = { email, u_password };
                        getData('userData');
                    }}
                    buttonStyle={{ width: 60, backgroundColor: '#02090d', margin: 10 }} title="get" />
                <Button
                    onPress={() => {

                        AsyncStorageHelper.setData('user-login', '');
                        setIsLogin(false);
                        // EventRegister.emit('logoutEvent');
                    }}
                    buttonStyle={{ width: 100, backgroundColor: '#02090d', margin: 10 }} title="Logout" />
            </View>
        </View>
    );

}

export default Async;