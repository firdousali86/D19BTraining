import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import UserBasicInfo from './UserBasicInfo';
import UserContactInfo from './UserContactInfo';
import UserEducationInfo from './UserEducationInfo';

export default class UserProfileClassComponent extends Component {
  render() {
    const {basicInfo, contactInfo, educationInfo} = this.props.userObject;

    const renderBasicInfo = () => {
      if (basicInfo !== undefined) {
        return <UserBasicInfo basicInfo={basicInfo} />;
      }

      return null;
    };

    const renderContactInfo = () => {
      if (contactInfo !== undefined) {
        return <UserContactInfo contactInfo={contactInfo} />;
      }

      return null;
    };

    const renderEducationInfo = () => {
      if (educationInfo !== undefined) {
        return <UserEducationInfo educationInfo={educationInfo} />;
      }

      return null;
    };

    return (
      <ScrollView>
        <View
          scrollIndicatorInsets={{right: 1}}
          style={{backgroundColor: '#e8f0fe'}}>
          {renderBasicInfo()}
          {renderContactInfo()}
          {renderEducationInfo()}
        </View>
      </ScrollView>
    );
  }
}
