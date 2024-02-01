import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Linking,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const FireBaseSignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigation();
  const appLogo = require('../../../../logo.png');

  const fadeIn = new Animated.Value(0);
  
  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    // Implement Firebase authentication logic here
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Login Successfully!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const attributionText = (
    <View style={{flexDirection: 'row', marginTop: 20}}>
      <Text style={{...styles.attributionText, marginRight: 5}}>
        Powered by{' '}
      </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://fusioninvoice.com')}>
        <Text
          style={{
            ...styles.attributionText,
            fontWeight: 'bold',
            color: '#3498DB',
          }}>
          FusionInvoice
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Animated.View style={[styles.container, {opacity: fadeIn}]}>
      <View style={[styles.shadowContainer]}>
        {appLogo ? (
          <Image source={appLogo} style={styles.logo} />
        ) : (
          <Text style={styles.title}>SIGN IN</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B4B4B4"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B4B4B4"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity style={{marginTop: 30}} onPress={handleLogin}>
          <Text style={[styles.buttonText, {fontSize: 10}]}>
            If you have not account then go to sign up page
          </Text>
          <Text
            style={[styles.buttonText, {color: '#3aceff', textAlign: 'center'}]}
            onPress={() => {
              navigate.navigate('FireBase Register');
            }}>
            {' '}
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {attributionText}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50',
  },
  shadowContainer: {
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 16.0,
    shadowColor: '#f9f9f9',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    color: '#ECF0F1',
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#ECF0F1',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#34495E',
  },
  loginButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginBottom: 20,
  },

  buttonText: {
    color: '#ECF0F1',
    fontSize: 16,
    textAlign: 'center',
  },
  imgShadow: {
    backgroundColor: '#ebfbff',
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    borderRadius: 70,
    elevation: 24,
  },
  attributionText: {
    color: '#ECF0F1',
    fontSize: 12,
  },
});

export default FireBaseSignIn;
