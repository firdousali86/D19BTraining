import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import TestApiHelper from './Helper';

const TestApi = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    TestApiHelper.post('https://jsonplaceholder.typicode.com/todos')
      .then(data => {
        console.log(data);
        setApiData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={apiData}
        renderItem={({item, index}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default TestApi;
