import React from 'react';
import {View, Text, Button} from 'react-native';

function SettingsScreen({navigation, route}) {
  const {city, country} = route.params;

  return (
    <View>
      <Text>this is very simple settings screen</Text>

      <Text>{city}</Text>
      <Text>{country}</Text>
      <Button
        title="again navigate to settings"
        onPress={() => {
          navigation.push('Settings');
        }}
      />

      <Button
        title={'pop to top'}
        onPress={() => {
          navigation.popToTop();
        }}
      />

      <Button
        title={'push dashboard'}
        onPress={() => {
          navigation.push('Dashboard');
        }}
      />

      <Button
        title={'pop to top'}
        onPress={() => {
          navigation.popToTop();
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
