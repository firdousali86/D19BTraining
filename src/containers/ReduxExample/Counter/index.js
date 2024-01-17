import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../../features/counter/counterSlice'
import { Button, StyleSheet, Text, View } from 'react-native'



const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View style={{ flexDirection: 'column' }}>
            <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 25 }}>{count}</Text>
            <View style={{ margin: 10 }}>
                <Button title='Increment' color='pink' onPress={() => dispatch(increment())} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Decrement' onPress={() => dispatch(decrement())} />
            </View>

        </View >
    );
};


const styles = StyleSheet.create({


});

export default Counter;
