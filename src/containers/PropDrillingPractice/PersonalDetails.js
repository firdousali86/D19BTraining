import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

const PersonalDetails = props => {
  console.log('PersonalDetails view rendered');

  return (
    <View>
      <Text>
        Name: {props.userObject.firstName + ' ' + props.userObject.lastName}
      </Text>
      <Text>Age: {props.userObject.age}</Text>
      <Text>Gender: {props.userObject.gender}</Text>
    </View>
  );
};

export default memo(PersonalDetails);

const styles = StyleSheet.create({});
