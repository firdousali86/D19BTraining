import {Text, StyleSheet, View,ScrollView} from 'react-native';
import React, {Component} from 'react';
import UserBasicInfo from './UserBasicInfo';
import UserContactInfo from './UserContactInfo';
import UserEducationInfo from './UserEducationInfo';

export default class UserProfileClassComponent extends Component {
  render() {
    const {basicInfo, contactInfo, educationInfo} = this.props.userObject;

    renderBasicInfo = () => {
      if (basicInfo !== undefined) {
        return <UserBasicInfo basicInfo={basicInfo} />;
      }

      return null;
    };

    renderContactInfo = () => {
      if (contactInfo !== undefined) {
        return <UserContactInfo contactInfo={contactInfo} />;
      }

      return null;
    };

    renderEducationInfo = () => {
      if (educationInfo !== undefined) {
        return <UserEducationInfo educationInfo={educationInfo} />;
      }

      return null;
    };

    return (
      <ScrollView>
      <View style={{backgroundColor: 'pink'}}>
        {renderBasicInfo()}
        {renderContactInfo()}
        {renderEducationInfo()}
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
