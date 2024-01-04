import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

const ContactDetails = props => {
  console.log('Contact Details view rendered');

  return (
    <View style={{}}>
      <Text>Address: {props.userObject.address}</Text>
      <Text>Phone: {props.userObject.phone}</Text>
    </View>
  );
};

export default memo(ContactDetails);

const styles = StyleSheet.create({});
