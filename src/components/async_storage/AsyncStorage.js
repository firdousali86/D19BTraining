import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userObject = {
  basicInfo: {
    firstName: 't',
    lastName: 'boss',
    gender: 'Male',
    DOB: 'Dec 3',
  },
  contactInfo: {
    cell: '123456789',
    email: 'ntboss@gmail.com',
    address: '123 street',
    city: 'AH',
    country: 'Bharat',
  },
  educationInfo: {
    lastDegree: 'MS',
    university: 'NEDUET',
  },
};

const AsyncStorageTest = () => {
  const [getLogInData, setLogInData] = useState();
  const [getEmail, setEmail] = useState();
  const [getPassword, setPassword] = useState();

  const StoreDataOnAsyncStorage = async () => {
    try {
      let data = {email: getEmail, password: getPassword};
      //  AsyncStorage.setItem('email', getEmail);
      //  AsyncStorage.setItem('password', getPassword);
      AsyncStorage.setItem('data', JSON.stringify(userObject));

      console.log('Data stored successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const GetDataOnAsyncStorage = async () => {
    try {
      // const email = await AsyncStorage.getItem('email');
      // const password = await AsyncStorage.getItem('password');

      const data = await AsyncStorage.getItem('data');
      console.log(data);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{backgroundColor: '#f0f8ff', padding: 15, borderBottomWidth: 1}}>
        <Text style={{textAlign: 'justify', fontSize: 15}}>
          AsyncStorage is an unencrypted, asynchronous, persistent, key-value
          storage system that is global to the app. It should be used instead of
          LocalStorage. It is recommended that you use an abstraction on top of
          AsyncStorage instead of AsyncStorage directly for anything more than
          light usage since it operates globally
        </Text>
      </View>
      <View style={{padding: 15}}>
        <TextInput
          placeholder="Enter Email"
          style={asyncStyle.input}
          onChangeText={email => {
            setEmail(email);
          }}
        />
        <TextInput
          style={asyncStyle.input}
          placeholder="Enter Password"
          secureTextEntry
          onChangeText={pass => {
            setPassword(pass);
          }}
        />
        <Button title="Submit Data" onPress={StoreDataOnAsyncStorage} />
        <Button title="Show data" onPress={GetDataOnAsyncStorage} />
      </View>
    </View>
  );
};

const asyncStyle = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
});

export default AsyncStorageTest;
