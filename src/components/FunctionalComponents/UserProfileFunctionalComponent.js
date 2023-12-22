import React from 'react';
import {View } from 'react-native';
import UserBasicInfoF from './UserBasicInfoF';
import UserContactInfoF from './UserContactInfoF';
import UserEducationInfoF from './UserEducationInfoF';

const UserProfileFunctionalComponent = props => {
  const renderBasicInfo = basicInfo => {
    return <UserBasicInfoF basicInfo={basicInfo} />;
  };

  const renderContactInfo = contactInfo => {
    return <UserContactInfoF contactInfo={contactInfo} />;
  };

  const renderEducationInfo = educationInfo => {
    return <UserEducationInfoF educationInfo={educationInfo} />
  };

  const { userObject } = props;
  const { basicInfo, contactInfo, educationInfo } = userObject;

  return (
    <View style={{backgroundColor:'#fff',marginTop:15,padding:10}}> 
      {renderBasicInfo(basicInfo)}
      {renderContactInfo(contactInfo)}
      {renderEducationInfo(educationInfo)}
    </View>
  );
};

export default UserProfileFunctionalComponent;


