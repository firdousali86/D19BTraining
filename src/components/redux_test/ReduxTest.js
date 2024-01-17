import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../feature/CounterSlice';

const ReduxTest = () => {
    const count = useSelector((state) => state.counter.value)
    // console.log(useSelector((state) => state.counter))

  const dispatch = useDispatch();

  return (
    <View>
      <Text>{count}</Text>

      <Button
        title="increment"
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Button
        title="decrement"
        onPress={() => {
          dispatch(decrement());
        }}
      />
    </View>
  );
};

export default ReduxTest;
