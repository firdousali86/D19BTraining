import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../feature/UserSlice';
import FastImage from 'react-native-fast-image';
import auth from '@react-native-firebase/auth';

import FlashMessage, {showMessage} from 'react-native-flash-message';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogInSubmit = () => {
    if (email != '' && password != '') {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(props => {
          console.log(props);
          console.log('Login successfully!');
          // dispatch(login({email, password}));
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

        });
    } else {
      Eroor('Add email or password');
    }
  };

  const Eroor = error => {
    showMessage({
      message: error,
      type: 'danger',
      position: 'top',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginLogo}>
        <FastImage
          style={styles.logoImage}
          source={require('../.././assets/logo.png')}
        />
      </View>

      <View style={styles.cardBody}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#ced4da"
          style={styles.input}
          onChangeText={newUser => setEmail(newUser)}
          value={email}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#ced4da"
          secureTextEntry
          style={styles.input}
          onChangeText={pss => setPassword(pss)}
          value={password}
        />

        <TouchableOpacity
          onPress={() => {
            handleLogInSubmit();
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text>Powered by</Text>
        <TouchableOpacity
          onPress={() => console.log('Navigate to FusionInvoice')}>
          <Text style={styles.fusionInvoiceText}>FusionInvoice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignUp') }>
          <Text style={styles.fusionInvoiceText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <FlashMessage position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
  },
  loginLogo: {
    marginBottom: 20,
  },
  logoImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    elevation: 5,
    shadowColor: '#000',
    backgroundColor: 'white',
  },
  logoText: {
    fontSize: 21,
    fontWeight: '300',
    marginBottom: 9,
    textAlign: 'center',
  },
  cardBody: {
    backgroundColor: '#fff',
    color: '#666',
    padding: 20,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    padding: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  fusionInvoiceText: {
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default Login;
