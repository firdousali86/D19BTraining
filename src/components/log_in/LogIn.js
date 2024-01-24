import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch } from 'react-redux';
import { login } from '../feature/userSlice';

const LogIn = () => {
  const [email, setUser] = useState('');
  const [password, setPass] = useState('');
  const dispatch  = useDispatch();


  return (
    <View>
      <TextInput
        style={{backgroundColor: 'lightgray'}}
        placeholder="Enter username"
        onChangeText={newUser => setUser(newUser)}
      />
      <TextInput
        secureTextEntry={true}
        style={{backgroundColor:'lightgray'}}
        onChangeText={pss => setPass(pss)}
      />
      <Button title="Log in" onPress={() => {
        dispatch(login({email,password}))
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default LogIn;
