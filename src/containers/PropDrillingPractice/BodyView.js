import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListView from './ListView';

const BodyView = props => {
  return (
    <View style={{flex: 0.6, backgroundColor: 'yellow'}}>
      <ListView {...props} />
    </View>
  );
};

export default BodyView;

const styles = StyleSheet.create({});
