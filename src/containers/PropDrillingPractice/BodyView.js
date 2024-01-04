import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import ListView from './ListView';

const BodyView = props => {
  console.log('BodyView rendered');

  return (
    <View style={{flex: 0.6, backgroundColor: 'yellow'}}>
      <ListView />
    </View>
  );
};

export default memo(BodyView);

const styles = StyleSheet.create({});
