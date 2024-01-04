import React from 'react';
import {View, Text, TextInput} from 'react-native';

class UserContactInfo extends React.PureComponent {
  render() {
    console.log('user contact info was rerendered');

    const {contactInfo} = this.props;

    return (
      <View>
        <Text>Cell: {contactInfo?.cell}</Text>
        <Text>Email: {contactInfo?.email}</Text>
        <Text>Address: {contactInfo?.address}</Text>
        <Text>City: {contactInfo?.city}</Text>
        <Text>Country: {contactInfo?.country}</Text>
      </View>
    );
  }
}

export default UserContactInfo;
