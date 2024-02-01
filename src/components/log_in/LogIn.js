import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../feature/UserSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

const LogIn = () => {
  const [email, setUser] = useState('');
  const [password, setPass] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Icon name="user-circle" style={{marginBottom: 10}} size={100}></Icon>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        onChangeText={newUser => setUser(newUser)}
      />

      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Enter password"
        onChangeText={pss => setPass(pss)}
      />
      <Button
        title="Log in"
        onPress={() => {
          dispatch(login({email, password}));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'lightgray',
    width: '70%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default LogIn;

