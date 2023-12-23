import React from 'react';
import {View, Text} from 'react-native';
import UserBasicInfoF from './UserBasicInfoF';
import UserContactInfoF from './UserContactInfoF';

const UserProfileFunctionalComponent = props => {
  renderBasicInfo = basicInfo => {
    return (
      <UserBasicInfoF basicInfo={basicInfo} onNameChange={props.onNameChange} />
    );
  };

  renderContactInfo = contactInfo => {
    return <UserContactInfoF contactInfo={contactInfo} />;
  };

  renderEducationInfo = () => {};

  const {userObject} = props;
  const {basicInfo, contactInfo} = userObject;

  return (
    <View>
      {renderBasicInfo(basicInfo)}
      {renderContactInfo(contactInfo)}
    </View>
  );
};

export default UserProfileFunctionalComponent;

const myobject = {sdsdf: 'sdsdf', sdsdf: 'dfgdfg'};
