import { View } from 'react-native';
import React, { Component } from 'react';
import UserBasicInfo from './UserBasicInfo';
import UserContactInfo from './UserContactInfo';

export default class UserProfileClassComponent extends Component {
  render() {
    const { basicInfo, contactInfo } = this.props.userObject;

    const renderBasicInfo = () => {
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

    return (

      <View scrollIndicatorInsets={{ right: 1 }} >
        {renderBasicInfo()}
        {renderContactInfo()}
      </View>

    );
  }
}
