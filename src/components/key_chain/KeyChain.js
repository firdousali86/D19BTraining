import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {useTextContext} from '../setting/SettingContextApi';
import KeyChainHelper from '../helper/KeyChainHelper';

const KeyChain = () => {
  const {selectedColor} = useTextContext();

  const [getEmail, setEmail] = useState();
  const [getPassword, setPassword] = useState();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: selectedColor,
          padding: 15,
          borderBottomWidth: 1,
        }}>
        <Text style={{textAlign: 'justify', fontSize: 15}}>Key Chain</Text>
      </View>
      <View style={{padding: 15}}>
        <TextInput
          placeholder="Enter Email"
          style={KeyChainCss.input}
          onChangeText={email => {
            setEmail(email);
          }}
        />
        <TextInput
          style={KeyChainCss.input}
          placeholder="Enter Password"
          secureTextEntry
          onChangeText={pass => {
            setPassword(pass);
          }}
        />
        <Button
          title="Submit Data"
          onPress={() => {
            KeyChainHelper.storeUserSession(getEmail, getPassword);
          }}
        />
        <Button
          title="Show data"
          onPress={() => {
            KeyChainHelper.retrieveUserSession('user_session');
          }}
        />
      </View>
    </View>
  );
};

const KeyChainCss = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
});

export default KeyChain;
