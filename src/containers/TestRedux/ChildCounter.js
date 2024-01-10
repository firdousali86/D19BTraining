import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';

const ChildCounter = () => {
  console.log('child counter was rerendered');

  const count = useSelector(state => state.counter.value);

  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
};

export default ChildCounter;

const styles = StyleSheet.create({});
