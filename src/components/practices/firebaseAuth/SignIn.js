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
import Toast from 'react-native-toast-message';

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
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Login Successfully!',
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: error.message,
          });
        } else if (error.code === 'auth/invalid-email') {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: error.message,
          });

          
        } else {
          var errorMessage = error.message;
          var regexPattern = /\[.*\] (.*)/;
          var match = errorMessage.match(regexPattern);
          var extractedMessage = match ? match[1] : errorMessage;
          console.log('this is main');
          Toast.show({
            type: 'error',
            position: 'top',
            text1: extractedMessage,
            text1NumberOfLines:5
          });

        }
        console.log(error);
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

      <View style={[styles.inputContainer, styles.darkTheme]}>
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
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text
            style={[styles.signupLink, {color: '#3aceff'}]}
            onPress={() => {
              navigate.navigate('FireBase Register');
            }}>
            Sign Up
          </Text>
        </Text>
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
  darkTheme: {
    backgroundColor: '#34495E',
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
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#34495E', // Dark background color for input container
    borderRadius: 10, // Add border radius for a rounded look
    padding: 15, // Add padding for spacing
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
    marginTop: 20,
  },

  buttonText: {
    color: '#ECF0F1',
    fontSize: 16,
    textAlign: 'center',
  },
  imgShadow: {
    backgroundColor: '#111111',
    shadowColor: '#ffffff',
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
  signupContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#ECF0F1',
  },
  signupLink: {
    fontWeight: 'bold',
  },
});

export default FireBaseSignIn;
