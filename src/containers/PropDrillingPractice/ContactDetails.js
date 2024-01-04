import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactDetails = props => {
  return (
    <View style={{}}>
      <Text>Address: {props.userObject.address}</Text>
      <Text>Phone: {props.userObject.phone}</Text>
    </View>
  );
};

export default ContactDetails;

const styles = StyleSheet.create({});
