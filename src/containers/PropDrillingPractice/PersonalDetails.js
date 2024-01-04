import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PersonalDetails = props => {
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

export default PersonalDetails;

const styles = StyleSheet.create({});
