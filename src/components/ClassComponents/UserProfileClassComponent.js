import {Text, StyleSheet, View,ScrollView} from 'react-native';
import React, {Component} from 'react';
import UserBasicInfo from './UserBasicInfo';
import UserContactInfo from './UserContactInfo';
import UserEducationInfo from './UserEducationInfo';

export default class UserProfileClassComponent extends Component {
  renderBasicInfo = basicInfo => {
    if (basicInfo !== undefined) {
      return <UserBasicInfo basicInfo={basicInfo} />;
    }

    return null;
  };

  renderContactInfo = contactInfo => {
    if (contactInfo !== undefined) {
      return <UserContactInfo contactInfo={contactInfo} />;
    }

    return null;
  };

  renderEducationInfo = educationInfo => {
    if (educationInfo !== undefined) {
      return <UserEducationInfo educationInfo={educationInfo} />;
    }

    return null;
  };

  render() {
    const {basicInfo, contactInfo, educationInfo} = this.props.userObject;

    return (
      <ScrollView>
      <View style={{backgroundColor: 'pink'}}>
        {this.renderBasicInfo(basicInfo)}
        {this.renderContactInfo(contactInfo)}
        {this.renderEducationInfo(educationInfo)}
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
