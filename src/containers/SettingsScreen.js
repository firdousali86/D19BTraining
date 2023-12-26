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
          navigation.navigate('Dashboard');
        }}
      />

      <Button
        title={'change params from within'}
        onPress={() => {
          navigation.setParams({
            city: 'somecity',
            country: 'somecountry',
          });
        }}
      />

      <CustomComp city={city} country={country}></CustomComp>
    </View>
  );
}

const CustomComp = props => {
  return (
    <View>
      <Text>custom comp</Text>
      <Text>{props.city}</Text>
      <Text>{props.country}</Text>
    </View>
  );
};

export default SettingsScreen;
