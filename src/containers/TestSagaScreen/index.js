import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ApiHelper} from '../../helpers';

const TestSagaScreen = () => {
  useEffect(() => {
    ApiHelper.get('http://localhost:3000/api/items')
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default TestSagaScreen;

const styles = StyleSheet.create({});
