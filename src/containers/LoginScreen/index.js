import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {PersistanceHelper} from '../../helpers';
import {EventRegister} from 'react-native-event-listeners';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    return () => {
      console.log('login screen unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('email or pas was changed');
  }, [email, password]);

  // useEffect(() => {
  //   console.log('password was changed');
  // }, [password]);

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
        onPress={async () => {
          PersistanceHelper.setValue('userEmail', email);
          EventRegister.emit('loginEvent', email);

          PersistanceHelper.setObject('testObject', {
            car: 'Passo',
            mileage: 53000,
            color: 'black',
          });
        }}>
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
