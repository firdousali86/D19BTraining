/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, ScrollView } from 'react-native';
import UserProfileClassComponent from './src/components/ClassComponents/UserProfileClassComponent';
import UserProfileFunctionalComponent from './src/components/FunctionComponents/UserProfileFunctionalComponent';

const userObject = {
  basicInfo: {
    firstName: 'Flash',
    lastName: 'Balan',
    gender: 'Male',
    DOB: 'Dec 3',
  },
  contactInfo: {
    cell: '123456789',
    email: 'firdous@firdous.com',
    address: '123 street',
    city: 'Karachi',
    country: 'Pakistan',
  }
};


const carObjectForFunction = {
  basicInfo: {
    name: 'MG',
    milage: '50KM',
    speed: '0.002 | 300K/M',
  },
  colorAndPriceInfo: {
    price: '$ 2,00,000,0000.00',
    color: 'RED',
  },
};

function App() {

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#e8f0fe' }}>
          <View style={styles.container}>
            <Text style={styles.label}>Class Components</Text>
          </View>
          <UserProfileClassComponent userObject={userObject} />

          <View
            style={{
              height: 5,
              marginTop: 5,
              backgroundColor: '#00518e',
              alignSelf: 'stretch',
            }}
          />

          <View style={styles.container}>
            <Text style={styles.label}>function Components</Text>
          </View>
          
          <UserProfileFunctionalComponent carObject={carObjectForFunction} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = {
  container: {
    backgroundColor: '#00518e',
    borderColor: '#ddd',
    borderWidth: 5,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
};

export default App;
