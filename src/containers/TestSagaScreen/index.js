import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {ApiHelper} from '../../helpers';
import {request} from '../../features/items/itemsSlice';
import {logout} from '../../features/user/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {kApiPostItems} from '../../config/WebService';

const TestSagaScreen = () => {
  const items = useSelector(state => state.items);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');

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

      <TextInput
        value={title}
        onChangeText={ct => {
          setTitle(ct);
        }}
        placeholder="Title"
      />
      <TextInput
        value={image}
        onChangeText={ct => {
          setImage(ct);
        }}
        placeholder="Image"
      />
      <TextInput
        value={details}
        onChangeText={ct => {
          setDetails(ct);
        }}
        placeholder="Details"
      />

      <Button
        title={'Submit Item'}
        onPress={() => {
          dispatch(
            request({
              url: kApiPostItems,
              method: 'POST',
              data: {title, image, details},
            }),
          );
        }}
      />

      <FlatList
        data={items}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>test</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TestSagaScreen;

const styles = StyleSheet.create({});
