import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Simple effect which is called everytime while component changed
  useEffect(() => {
    console.log('it called');
  });

  // It is called when first time comp load
  useEffect(() => {
    console.log('it is called during first time load')
  }, []);

  useEffect(() => {
    console.log('called when props or stats are changed');
  }, [props]);

  useEffect(() => {
    return () => {
      console.log('it is work during unmount');
    }
  }, []);

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={ct => {
          setEmail(ct);
        }}
        placeholder="Enter Email"
        style={styles.textInput}
      />
      <TextInput
        value={password}
        onChangeText={ct => {
          setPassword(ct);
        }}
        placeholder="Enter Password"
        secureTextEntry
        style={styles.textInput}
      />

      <TouchableOpacity style={styles.submitButton}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'grey',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 40,
    borderRadius: 8,
    padding: 5,
  },
  submitButton: {
    backgroundColor: 'yellow',
    marginHorizontal: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 8,
  },
});
