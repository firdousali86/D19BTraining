import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

import HeaderView from './HeaderView';
import BodyView from './BodyView';

const PropDrillingPractice = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderView />
      <BodyView />
    </View>
  );
};

export default PropDrillingPractice;

const styles = StyleSheet.create({});
