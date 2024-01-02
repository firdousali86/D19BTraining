import {View, Text, Button} from 'react-native';
import React, {memo, useEffect} from 'react';
import UserBasicInfo from '../../components/ClassComponents/UserBasicInfo';
import UserContactInfo from '../../components/ClassComponents/UserContactInfo';

const userObject = {
  basicInfo: {
    firstName: 'Firdous',
    lastName: 'Ali',
    gender: 'Male',
    DOB: 'Dec 3',
  },
  contactInfo: {
    cell: '123456789',
    email: 'firdous@firdous.com',
    address: '123 street',
    city: 'Karachi',
    country: 'Pakistan',
  },
  educationInfo: {
    lastDegree: 'MS',
    university: 'NEDUET',
  },
};

const SampleFunctComp = props => {
  console.log('child func comp rerendered');

  useEffect(() => {
    console.log('componentdidmount of child func component');
  }, []);

  useEffect(() => {
    console.log('entered text has changed');

    return () => {
      //
    };
  }, [props.enteredText]);

  return (
    <View style={{backgroundColor: 'pink'}}>
      <Text>this is very simple functional comp</Text>
      <UserBasicInfo basicInfo={userObject.basicInfo} />
      <UserContactInfo contactInfo={userObject.contactInfo} />

      <Button
        title={'Button'}
        onPress={() => {
          props.buttonHandler();
        }}
      />
    </View>
  );
};

export default memo(SampleFunctComp, (prevProps, nextProps) => {
  return prevProps.enteredText === nextProps.enteredText;
});
