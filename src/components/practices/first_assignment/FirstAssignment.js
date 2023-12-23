import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements';

const FirstAssignment = props => {
  return (
    <View>
      <Text>First Assignment</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default FirstAssignment;
