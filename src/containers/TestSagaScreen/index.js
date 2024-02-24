import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {ApiHelper} from '../../helpers';
import {
  request,
  requestEvery,
  requestLatest,
} from '../../features/items/itemsSlice';
import {logout} from '../../features/user/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {kApiPostItems, kApiTodos} from '../../config/WebService';

const TestSagaScreen = () => {
  const items = useSelector(state => state.items);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');

  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  function handleAlertClick() {
    setTimeout(() => {
      // alert('You clicked on: ' + count);
      Alert.alert('You clicked on: ' + count, '');
    }, 3000);
  }

  useEffect(() => {
    // dispatch(request({url: kApiTodos}));
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
      <Text style={{fontSize: 32}}>{count}</Text>

      <Button
        title={'Click me'}
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button title={'Show Alert'} onPress={handleAlertClick} />

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

      <Button
        title={'Fetch items'}
        onPress={() => {
          dispatch(request({url: kApiTodos}));
        }}
      />
      <Button
        title={'Fetch Latest'}
        onPress={() => {
          dispatch(requestLatest({url: kApiTodos}));
        }}
      />
      <Button
        title={'Fetch Every'}
        onPress={() => {
          dispatch(requestEvery({url: kApiTodos}));
        }}
      />
    </View>
  );
};

export default TestSagaScreen;

const styles = StyleSheet.create({});
