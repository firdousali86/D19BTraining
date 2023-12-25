import React from 'react';
import {View, Text, Button} from 'react-native';

const Details = ({navigation,route}) => {
  return (
    <View>
      <Text>{route.params?.item}</Text>
      <Button
        title="Back"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Details;
