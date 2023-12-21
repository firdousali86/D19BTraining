import React from 'react';
import {View, Text, TextInput} from 'react-native';

class UserBasicInfo extends React.Component {
  render() {
    const {basicInfo} = this.props;

    return (
      <View>
        <Text>First Name: {basicInfo?.firstName}</Text>
        <Text>Last Name: {basicInfo?.lastName}</Text>
        <Text>Gender: {basicInfo?.gender}</Text>
        <Text>DOB: {basicInfo?.DOB}</Text>
      </View>
    );
  }
}

export default UserBasicInfo;
