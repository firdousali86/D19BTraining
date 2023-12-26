import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const Details = ({navigation, route}) => {
  const [item, setItem] = useState(route.params);
  return (
    <View>
      <Text>{route.params?.item}</Text>
      <TextInput
        value={item.item}
        onChangeText={changedText => {
          setItem(prevItem => ({
            ...prevItem,
            item: changedText,
          }));
        }}
      />
      <Button title="Back" onPress={() => navigation.navigate('First', item)} />
    </View>
  );
};

export default Details;
