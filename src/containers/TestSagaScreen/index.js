import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
// import {ApiHelper} from '../../helpers';
import {request} from '../../features/items/itemsSlice';
import {logout} from '../../features/user/userSlice';
import {useDispatch} from 'react-redux';

const TestSagaScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(request({url: 'http://localhost:3000/api/items'}));
    // ApiHelper.get('http://localhost:3000/api/items')
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <View>
      <Text>index</Text>
      <Button
        title={'Logout'}
        onPress={() => {
          dispatch(logout());
        }}
      />
    </View>
  );
};

export default TestSagaScreen;

const styles = StyleSheet.create({});
