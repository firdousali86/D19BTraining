import React from 'react';
import {View, Text} from 'react-native';

const ContactInfoComponent = (prop)=> {
  const {cell, email, address, city, country} = prop?.contactInfo;
const commonStyle =prop.commonStyle;


  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{...commonStyle.infoTitle,verticalAlign:'middle'}}>Phone Number:</Text>
        <Text style={commonStyle.info}>{cell}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text  style={{...commonStyle.infoTitle,verticalAlign:'middle'}}>Email:</Text>
        <Text  style={commonStyle.info}>{email}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text  style={{...commonStyle.infoTitle,verticalAlign:'middle'}}>Address:</Text>
        <Text  style={commonStyle.info}>{address}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text  style={{...commonStyle.infoTitle,verticalAlign:'middle'}}>City:</Text>
        <Text  style={commonStyle.info}>{city}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text  style={{...commonStyle.infoTitle,verticalAlign:'middle'}}>Country:</Text>
        <Text  style={commonStyle.info}>{country}</Text>
      </View>
    </View>
  );
};

export default ContactInfoComponent;
