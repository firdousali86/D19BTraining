import React from 'react';
import {View, Text} from 'react-native';

const UserContactInfoF = props => {
  const {cell, email, address, country, city} = props.contactInfo;
  return (
    <View>
      <Text>Cell: {cell}</Text>
      <Text>Email: {email}</Text>
      <Text>Address: {address}</Text>
      <Text>City: {city}</Text>
      <Text>Country: {country}</Text>
    </View>
  );
};

export default UserContactInfoF;
