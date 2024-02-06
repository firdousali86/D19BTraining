import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import TestApiHelper from '../api_practise/Helper';
import {request} from '../feature/ApiItemSlice';
import { useDispatch,useSelector } from 'react-redux';



const TestSaga = () => {
  const dispatch  =  useDispatch();
  const apiData = useSelector((state) => state.apiItem.apiItem); 
  useEffect(() => {
    dispatch(request({url:'https://jsonplaceholder.typicode.com/todos'}))
  }, []);


  return (
    <View>
      <FlatList
        data={apiData}
        renderItem={({item, index}) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default TestSaga;
