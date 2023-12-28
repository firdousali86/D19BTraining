import React from 'react';
import {View, Text, TextInput} from 'react-native';

class UserEducationInfo extends React.Component {
  render() {
    const {educationInfo} = this.props;

    return (
      <View>
        <Text>Last Degree: {educationInfo?.lastDegree}</Text>
        <Text>University: {educationInfo?.university}</Text>
      </View>
    );
  }
}

export default UserEducationInfo;
