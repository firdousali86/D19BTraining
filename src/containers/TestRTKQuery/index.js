import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useGetAllItemsQuery, usePostItemMutation} from '../../services/itemApi';

const TestRTKQuery = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const {data, error, isLoading} = useGetAllItemsQuery();
  const [postItem, {isLoading: isPosting}] = usePostItemMutation();

  console.log(data);

  return (
    <View>
      <Text>index</Text>
      {isLoading && <Text>Loading</Text>}

      <TextInput
        value={title}
        onChangeText={ct => {
          setTitle(ct);
        }}
        placeholder="Title"
      />
      <TextInput
        value={description}
        onChangeText={ct => {
          setDescription(ct);
        }}
        placeholder="Title"
      />
      <TextInput
        value={image}
        onChangeText={ct => {
          setImage(ct);
        }}
        placeholder="Title"
      />

      <Button
        title={'Post item'}
        onPress={() => {
          postItem({title, description, image});
        }}
      />
    </View>
  );
};

export default TestRTKQuery;

const styles = StyleSheet.create({});
