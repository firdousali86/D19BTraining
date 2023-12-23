import React, {useState} from 'react';
import {View, Text, ScrollView, Button, SafeAreaView} from 'react-native';
import UserProfileClassComponent from '../components/ClassComponents/UserProfileClassComponent';
import UserProfileFunctionalComponent from '../components/FunctionalComponents/UserProfileFunctionalComponent';
import TestCoreComponents from '../components/FunctionalComponents/TestCoreComponents';
import TestClassComponent from '../components/ClassComponents/TestClassComponent';
import TestFunctionalComponent from '../components/FunctionalComponents/TestFunctionalComponent';

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

function DashboardScreen(props) {
  const [parentBGColor, setParentBGColor] = useState('yellow');
  const [expState, setExpState] = useState(userObject.basicInfo.firstName);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Text style={{backgroundColor: 'blue', color: 'white'}}>
          {expState}
        </Text>

        <TestClassComponent
          bgColor={parentBGColor}
          myfirstprops={'this is prop value'}
          mynumber={12345678}
          mydata={['blue', 'green', 'red', 'white']}
        />
        <TestFunctionalComponent />

        <Button
          title="Change to black"
          onPress={() => {
            setParentBGColor('black');
          }}
        />
        <Button
          title="Change to grey"
          onPress={() => {
            setParentBGColor('grey');
          }}
        />
        <Button
          title={'Goto settings'}
          onPress={() => {
            props.navigation.navigate('Settings');
          }}
        />
        <UserProfileClassComponent userObject={userObject} />
        <UserProfileFunctionalComponent
          userObject={userObject}
          onNameChange={changedName => {
            setExpState(changedName);
          }}
        />
        <TestCoreComponents />
      </ScrollView>
    </SafeAreaView>
  );
}

export default DashboardScreen;
