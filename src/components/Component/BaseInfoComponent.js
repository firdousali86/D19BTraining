import React from 'react';
import {View, Text} from 'react-native';

const BaseInfoComponent = prop => {
  const {firstName, lastName, DOB} = prop?.basicInfo;
  const commonStyle =prop.commonStyle;

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{...commonStyle.infoTitle,verticalAlign:'middle'}}>First Name:</Text>
        <Text style={commonStyle.info}>{firstName}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{...commonStyle.infoTitle,verticalAlign:'middle'}}>Last Name:</Text>
        <Text style={commonStyle.info}>{lastName}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{...commonStyle.infoTitle,verticalAlign:'middle'}}>DOB:</Text>
        <Text style={commonStyle.info}>{DOB}</Text>
      </View>
    </View>
  );
};

export default BaseInfoComponent;
