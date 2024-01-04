import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EducationDetails = props => {
  return (
    <View style={{}}>
      <Text>Degree: {props.userObject.degree}</Text>
      <Text>University: {props.userObject.university}</Text>
    </View>
  );
};

export default EducationDetails;

const styles = StyleSheet.create({});
