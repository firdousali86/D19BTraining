import React from 'react';
import {View, Text, Button} from 'react-native';

function SettingsScreen(props) {
  return (
    <View>
      <Text>this is very simple settings screen</Text>
      <Button
        title="again navigate to settings"
        onPress={() => {
          props.navigation.push('Settings');
        }}
      />

      <Button
        title={'pop to top'}
        onPress={() => {
          props.navigation.popToTop();
        }}
      />

      <Button
        title={'push dashboard'}
        onPress={() => {
          props.navigation.push('Dashboard');
        }}
      />

      <Button
        title={'pop to top'}
        onPress={() => {
          props.navigation.popToTop();
        }}
      />

      <Button
        title={'navigate to dashboard'}
        onPress={() => {
          props.navigation.navigate('Dashboard');
        }}
      />
    </View>
  );
}

export default SettingsScreen;
