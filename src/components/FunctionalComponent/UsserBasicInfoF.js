import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const UserBasicInfoF = props => {
  const [firstName, setFirstName] = useState(props.basicInfo?.firstName);
  const {lastName, gender, DOB} = props.basicInfo;

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text>FirstName: </Text>
        <TextInput
          value={firstName}
          placeholder="First Name"
          onChangeText={changedText => {
            setFirstName(changedText);
          }}
          style={{backgroundColor: 'grey'}}
        />
      </View>
      <Text>LastName: {lastName}</Text>
      <Text>Gender: {gender}</Text>
      <Text>DOB: {DOB}</Text>
    </View>
  );
};

export default UserBasicInfoF;
