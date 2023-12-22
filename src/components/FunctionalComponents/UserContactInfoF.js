import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserContactInfoF = props => {
  const {phone, email, address, city, country} = props.contactInfo;

  return (
    <View>
      <Text>Phone: {phone}</Text>
      <Text>Email: {email}</Text>
      <Text>Address: {address}</Text>
      <Text>City: {city}</Text>
      <Text>Country: {country}</Text>
    </View>
  );
};

export default UserContactInfoF;

const styles = StyleSheet.create({});
