import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ApiHelper} from '../../helpers';
import {kApiTodos} from '../../config/WebService';

const TestAPIListScreen = () => {
  const [userData, setUserData] = useState([{}, {}, {}]);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(
    //       'https://jsonplaceholder.typicode.com/todos',
    //     );
    //     if (!response.ok) {
    //       throw new Error('Network request failed');
    //     }
    //     // console.log(response);
    //     const data = await response.json();
    //     // console.log(data);
    //     setUserData(data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };
    // fetchData();
  }, []);

  useEffect(() => {
    ApiHelper.get(kApiTodos)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <Text>test</Text>
      <FlatList
        data={userData}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.userId}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TestAPIListScreen;

const styles = StyleSheet.create({});
