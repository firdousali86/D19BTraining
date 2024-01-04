import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {useUserContext} from '../../contexts/UserContext';

const PersonalDetails = props => {
  console.log('PersonalDetails view rendered');

  const userObject = useUserContext();

  return (
    <View>
      <Text>Name: {userObject?.firstName + ' ' + userObject?.lastName}</Text>
      <Text>Age: {userObject?.age}</Text>
      <Text>Gender: {userObject?.gender}</Text>
    </View>
  );
};

export default memo(PersonalDetails);

const styles = StyleSheet.create({});
