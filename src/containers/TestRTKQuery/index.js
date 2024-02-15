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

  console.log('i got rerenderd');

  const {data, error, isLoading} = useGetAllItemsQuery();
  const [postItem, {isLoading: isPosting}] = usePostItemMutation();

  console.log(data);

  return (
    <View style={{flex: 1}}>
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
      <FlatList
        style={{flex: 1}}
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{margin: 5, backgroundColor: 'orange'}}>
              <Text>{item.title}</Text>
              <Text>{item.details}</Text>
              <Text>{item.image}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TestRTKQuery;

const styles = StyleSheet.create({});
