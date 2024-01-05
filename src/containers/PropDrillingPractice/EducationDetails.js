import {Button, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {useUserContext} from '../../contexts/UserContext';

const EducationDetails = props => {
  console.log('Education Details view rendered');

  const {
    state: {userObject},
    actions: {setSampleText},
  } = useUserContext();

  return (
    <View style={{}}>
      <Text>Degree: {userObject?.degree}</Text>
      <Text>University: {userObject?.university}</Text>

      <Button
        title={'Set Text'}
        onPress={() => {
          setSampleText('THIS IS SET FROM DEEPER COMPONENT');
        }}
      />
    </View>
  );
};

export default memo(EducationDetails);

const styles = StyleSheet.create({});
