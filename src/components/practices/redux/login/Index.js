import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice'
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";

const Login = props => {
    // For Counter
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    console.log('Redux ' + count);

    const [set_count, setCount] = useState(count);
    useEffect(() => {
        setCount(count);
        console.log('Normal State ' + count);
    }, [count]);

    // For Login
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

            <View style={{ flex: 1, backgroundColor: '#575757', padding: 20 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Text style={{ padding: 5, width: '30%', color: '#FFFFFF' }}>email</Text>

                    <TextInput
                        placeholder="Email"
                        style={{ backgroundColor: '#FFFFFF', padding: 5, width: '70%', color: '#000000' }}
                        onChangeText={(text) => setEmail(text)}
                    />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={{ padding: 5, width: '30%', color: '#FFFFFF' }}>password</Text>
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
                            console.log(dataToStore);
                        }}
                        disabled={isButtonDisabled}
                    />

                    <Button
                        onPress={async () => {
                            console.log('get');
                        }}
                        buttonStyle={{ width: 60, backgroundColor: '#02090d', margin: 10 }}
                        title="get"
                    />
                </View>

            </View>

            <View style={{ flex: 1, backgroundColor: '#cbc5c5', padding: 20 }}>

                <View>
                    <TextInput
                        placeholder="Counter Redux"
                        style={{ backgroundColor: '#FFFFFF', padding: 5, width: '100%', paddingVertical: 20, borderRadius: 20 }}
                        value={set_count}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>

                    <Button
                        buttonStyle={{ flax: 1, backgroundColor: '#0094d3', margin: 10 }}
                        title={'Increment value'}
                        onPress={() => dispatch(decrement())}
                    />

                    <Button
                        onPress={() => dispatch(increment())}
                        buttonStyle={{ flax: 1, backgroundColor: '#cf1c81', margin: 10 }}
                        title="Decrement Value"
                    />

                    {/* <Button
                        onPress={() => dispatch(incrementByAmount({ 'action': 'decrement', 'amount': 5 }))}
                        buttonStyle={{ flax: 1, backgroundColor: '#cf1c81', margin: 10 }}
                        title="Decrement Value"
                    /> */}

                </View>
            </View>
        </View>
    );

}

export default memo(Login);