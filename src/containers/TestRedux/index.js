import {StyleSheet, Text, View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import React from 'react';
import {decrement, increment} from '../../features/counter/counterSlice';
import ChildCounter from './ChildCounter';

const TestRedux = () => {
  const dispatch = useDispatch();

  console.log('test redux was rerendered');

  return (
    <View>
      <ChildCounter />
      <Button
        title={'Increment'}
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Button
        title={'Decrement'}
        onPress={() => {
          dispatch(decrement());
        }}
      />
    </View>
  );
};

export default TestRedux;

const styles = StyleSheet.create({});
