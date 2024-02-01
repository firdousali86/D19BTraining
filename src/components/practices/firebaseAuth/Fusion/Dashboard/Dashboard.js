import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const Dashboard = props => {
  const handleLogin = () => {
    try {
      // Implement Firebase authentication logic here
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    } catch (error) {
      console.log(error);
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
