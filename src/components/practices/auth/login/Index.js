import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { AsyncStorageHelper } from '../../../master/Helper';


const Login = props => {

    const [email, setEmail] = useState('');
    const [u_password, setUPassword] = useState('');


    useEffect(() => {
        console.log('Email was changed');
    }, [email])

    useEffect(() => {
        console.log('Password was changed');
    }, [u_password])

    const isButtonDisabled = !email || !u_password;

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
                        AsyncStorageHelper.logInDataSet('u-l-d', JSON.stringify(dataToStore));
                    }}
                    disabled={isButtonDisabled}  // Disable the button if either email or u_password is empty
                />
                <Button
                    onPress={() => {
                        AsyncStorageHelper.logInDataGet('u-l-d');
                    }}
                    buttonStyle={{ width: 60, backgroundColor: '#02090d', margin: 10 }} title="get" />
            </View>
        </View>
    );

}

export default Login;