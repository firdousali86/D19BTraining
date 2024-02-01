import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

const Dashboard = props => {
  const handleLogin = () => {
    try {
      // Implement Firebase authentication logic here
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: error.message,
      });
    }
  };

  return (
    <>
      <View>
        <Text>This is Dashboard.</Text>
        <Button
          title={'Logout'}
          onPress={() => {
            handleLogin();
          }}
        />
      </View>
    </>
  );
};
export default Dashboard;
