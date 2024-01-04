import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {useUserContext} from '../../contexts/UserContext';

const ContactDetails = props => {
  console.log('Contact Details view rendered');

  const userObject = useUserContext();

  return (
    <View style={{}}>
      <Text>Address: {userObject?.address}</Text>
      <Text>Phone: {userObject?.phone}</Text>
    </View>
  );
};

export default memo(ContactDetails);

const styles = StyleSheet.create({});
