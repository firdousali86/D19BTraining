import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import UserBasicInfo from './UserBasicInfo';
import UserContactInfo from './UserContactInfo';
import UserEducationInfo from './UserEducationInfo';

export default class UserProfileClassComponent extends Component {
  render() {
    const {basicInfo, contactInfo, educationInfo} = this.props.userObject;

    return (
      <View style={{backgroundColor: 'pink'}}>
        <UserBasicInfo basicInfo={basicInfo} />
        <UserContactInfo contactInfo={contactInfo} />
        <UserEducationInfo educationInfo={educationInfo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
