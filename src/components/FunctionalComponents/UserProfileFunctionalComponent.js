import React from 'react';
import {View, ScrollView } from 'react-native';
import UserBasicInfoF from './UserBasicInfoF';
import UserContactInfoF from './UserContactInfoF';
import UserEducationInfoF from './UserEducationInfoF';

const UserProfileFunctionalComponent = ({ route }) => {
  const renderBasicInfo = basicInfo => {
    return <UserBasicInfoF basicInfo={basicInfo} />;
  };

  const renderContactInfo = contactInfo => {
    return <UserContactInfoF contactInfo={contactInfo} />;
  };

  const renderEducationInfo = educationInfo => {
    return <UserEducationInfoF educationInfo={educationInfo} />
  };

  const { userObject } = route.params;
  const { basicInfo, contactInfo, educationInfo } = userObject;

  return (
    <ScrollView>
    <View style={{backgroundColor:'#fff',marginTop:15,padding:10}}> 
      {renderBasicInfo(basicInfo)}
      {renderContactInfo(contactInfo)}
      {renderEducationInfo(educationInfo)}
    </View>
    </ScrollView>
  );
};

export default UserProfileFunctionalComponent;


