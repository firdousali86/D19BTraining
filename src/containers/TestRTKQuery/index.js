import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGetAllItemsQuery} from '../../services/itemApi';

const TestRTKQuery = () => {
  const {data, error, isLoading} = useGetAllItemsQuery();

  console.log(data);

  return (
    <View>
      <Text>index</Text>
      {isLoading && <Text>Loading</Text>}
    </View>
  );
};

export default TestRTKQuery;

const styles = StyleSheet.create({});
