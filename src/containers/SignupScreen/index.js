import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {request} from '../../features/user/userSlice';
import {kApiSignup} from '../../config/WebService';
// import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

const SignupScreen = props => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          dispatch(
            request({url: kApiSignup, method: 'POST', data: {email, password}}),
          );

          // auth()
          //   .createUserWithEmailAndPassword(email, password)
          //   .then(() => {
          //     console.log('User account created & signed in!');
          //   })
          //   .catch(error => {
          //     if (error.code === 'auth/email-already-in-use') {
          //       console.log('That email address is already in use!');
          //     }
          //     if (error.code === 'auth/invalid-email') {
          //       console.log('That email address is invalid!');
          //     }
          //     console.error(error);
          //   });
        }}>
        <Text>Signup</Text>
      </TouchableOpacity>
      <Button
        title={'Login'}
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default SignupScreen;

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
