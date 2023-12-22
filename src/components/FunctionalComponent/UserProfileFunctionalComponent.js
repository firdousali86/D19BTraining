import React from 'react';
import {View, Button, Text} from 'react-native';
import UserBasicInfoF from './UsserBasicInfoF';
import UserContactInfoF from './UserContactInfoF';

const UserProfileFunctionalComponent = props => {
  const renderUserBasicInfo = basicInfo => {
    return <UserBasicInfoF basicInfo={basicInfo} />;
  };

  const renderUserContactInfo = contactInfo => {
    return <UserContactInfoF contactInfo={contactInfo} />;
  };

  const renderUserEducationInfo = () => {};

  const {userObject} = props;
  const {basicInfo, contactInfo, educationInfo} = userObject;

  return (
    <View>
      {renderUserBasicInfo(basicInfo)}
      {renderUserContactInfo(contactInfo)}
    </View>
  );
};

export default UserProfileFunctionalComponent;
