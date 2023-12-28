import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TestFlexScreen = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',

          alignContent: 'flex-start',
        }}>
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: 'yellow',
          }}></View>
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: 'pink',
          }}></View>
        <View style={{width: 20, height: 20, backgroundColor: 'white'}}></View>
        <View style={{width: 20, height: 20, backgroundColor: 'red'}}></View>
        <View style={{width: 20, height: 20, backgroundColor: 'green'}}></View>
        <View style={{width: 20, height: 20, backgroundColor: 'blue'}}></View>
        <View style={{width: 20, height: 20, backgroundColor: 'red'}}></View>
        <View style={{width: 20, height: 20, backgroundColor: 'green'}}></View>
        <View style={{width: 20, height: 20, backgroundColor: 'blue'}}></View>
        <View style={{width: 20, height: 20, backgroundColor: 'red'}}></View>
        <View style={{width: 20, height: 20, backgroundColor: 'green'}}></View>
        <View style={{width: 20, height: 20, backgroundColor: 'blue'}}></View>
      </View>
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
      <View style={{flex: 1, backgroundColor: 'green'}}></View>
      <View
        style={{
          position: 'absolute',
          right: 10,
          bottom: 10,
          backgroundColor: 'purple',
          width: 200,
          height: 200,
        }}>
        <View style={{backgroundColor: 'yellow', flex: 1}}></View>
        <View style={{backgroundColor: 'grey', flex: 1}}></View>
        <View style={{backgroundColor: 'black', flex: 1}}></View>
      </View>
    </View>
  );
};

export default TestFlexScreen;

const styles = StyleSheet.create({});
