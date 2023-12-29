import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const MYHOC = props => {
  useEffect(() => {
    return () => {
      console.log('myhoc screen getting unmounted');
    };
  }, []);

  return (
    <>
      <View
        style={[
          {backgroundColor: 'pink'},
          props.style,
          {backgroundColor: 'red'},
          {},
          {},
        ]}>
        <Text>this is the component which will become HOC in a moment</Text>
        {props.children}

        <Text>something</Text>
      </View>
      <View></View>
      <View></View>
      <View></View>
    </>
  );
};

const TestHOCScreen = () => {
  return (
    <View>
      <Text>TestHOCScreen</Text>
      <MYHOC style={{marginHorizontal: 10, marginVertical: 20}}>
        <View style={{backgroundColor: 'yellow'}}>
          <Text>this is the first child node of this HOC</Text>
        </View>
      </MYHOC>
    </View>
  );
};

export default TestHOCScreen;

const styles = StyleSheet.create({});
