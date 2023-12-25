import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import BaseInfoComponent from './BaseInfoComponent';
import ContactInfoComponent from './ContactInfoComponent';

const UserInfoFunComponent = props => {
  const {userObject} = props;
  const {basicInfo, contactInfo} = userObject;
  const [component_style, setColor] = useState(commonStyle);

  const renderBasicInfo = basicInfo => {
    return (
      <BaseInfoComponent basicInfo={basicInfo} commonStyle={component_style} />
    );
  };

  const renderContactInfo = contactInfo => {
    return (
      <ContactInfoComponent
        contactInfo={contactInfo}
        commonStyle={component_style}
      />
    );
  };

  return (
    <ScrollView>
      <View>
        <Text style={styles.head}>Functional Component</Text>
      </View>
      <View style={commonStyle.card}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png',
            }}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              borderRadius: 50,
              borderWidth: 2,
              backgroundColor: '#7fffd4',
              borderColor: 'black',
            }}
          />
        </View>
        <View style={{marginTop: 10, width: '100%', padding: 10}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Button
                title="aliceblue"
                onPress={() => {
                  setColor(prevStyle => ({
                    ...prevStyle,
                    info: {
                      ...prevStyle.info,
                      backgroundColor: '#f0f8ff',
                    },
                  }));
                }}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Button
                title="gold"
                color={'#ffd700'}
                onPress={() => {
                  setColor(prevStyle => ({
                    ...prevStyle,
                    info: {
                      ...prevStyle.info,
                      backgroundColor: '#ffd700',
                    },
                  }));
                }}
              />
            </View>
          </View>
        </View>

        {renderBasicInfo(basicInfo)}
        {renderContactInfo(contactInfo)}
      </View>
    </ScrollView>
  );
};

const commonStyle = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    shadowRadius: 3.84,
    elevation: 10,
    borderTopWidth: 4,
    borderTopColor: '#00bfff',
  },
  info: {
    width: '50%',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'aliceblue',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  infoTitle: {
    width: '50%',

    fontSize: 14,
    fontWeight: 'bold',
  },
  head: {
    paddingVertical: 10,
    marginVertical: 10,
    fontSize: 20,
    color: '#1e90ff',
    backgroundColor: '#add8e6',
    textAlign: 'center',
    fontWeight: 'bold',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: '#483d8b',
  },
});

export default UserInfoFunComponent;
