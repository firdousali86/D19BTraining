import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';

const UserBasicInfoF = props => {
  const [firstName, setFirstName] = useState(props.basicInfo?.firstName);

  const {lastName, gender, DOB} = props.basicInfo;

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text>First Name: </Text>
        <TextInput
          value={firstName}
          placeholder="First Name"
          onChangeText={changedText => {
            setFirstName(changedText);

            props.onNameChange(changedText);
          }}
          style={{backgroundColor: 'grey'}}
        />
      </View>

      <Text>Last Name: {lastName}</Text>
      <Text>Gender: {gender}</Text>
      <Text>DOB: {DOB}</Text>
    </View>
  );
};

export default UserBasicInfoF;

const styles = StyleSheet.create({});
