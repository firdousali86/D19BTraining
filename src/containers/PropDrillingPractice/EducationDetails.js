import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

const EducationDetails = props => {
  console.log('Education Details view rendered');

  return (
    <View style={{}}>
      <Text>Degree: {props.userObject.degree}</Text>
      <Text>University: {props.userObject.university}</Text>
    </View>
  );
};

export default memo(EducationDetails);

const styles = StyleSheet.create({});
