import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PersonalDetails from './PersonalDetails';
import ContactDetails from './ContactDetails';
import EducationDetails from './EducationDetails';

const HeaderView = () => {
  return (
    <View
      style={{
        flex: 0.4,
        backgroundColor: 'grey',
        flexDirection: 'row',
      }}>
      <View style={{width: 150, height: 150}}></View>
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <PersonalDetails />
        <ContactDetails />
        <EducationDetails />
      </View>
    </View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({});
