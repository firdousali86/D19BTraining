import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import PersonalDetails from './PersonalDetails';
import ContactDetails from './ContactDetails';
import EducationDetails from './EducationDetails';

const HeaderView = props => {
  console.log('HeaderView rendered');

  return (
    <View
      style={{
        flex: 0.4,
        backgroundColor: 'grey',
        flexDirection: 'row',
      }}>
      <View style={{width: 150, height: 150}}></View>
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <PersonalDetails {...props} />
        <ContactDetails {...props} />
        <EducationDetails {...props} />
      </View>
    </View>
  );
};

export default memo(HeaderView);

const styles = StyleSheet.create({});
