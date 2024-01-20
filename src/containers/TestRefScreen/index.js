import {useRef, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';

const TestRefScreen = () => {
  const firstNameFieldRef = useRef(null);
  const lastNameFieldRef = useRef(null);
  const cityFieldRef = useRef(null);
  const countryFieldRef = useRef(null);

  let [firstName, setFirstName] = useState('');
  const [currentData, setCurrentDate] = useState(undefined);

  const counter = useRef(0);

  return (
    <View>
      <Text>TestRefScreen</Text>

      <TextInput
        ref={firstNameFieldRef}
        onChangeText={() => {}}
        placeholder="First Name"
      />
      <TextInput
        ref={lastNameFieldRef}
        onChangeText={() => {}}
        placeholder="Last Name"
      />
      <TextInput
        ref={cityFieldRef}
        onChangeText={() => {}}
        placeholder="City"
      />
      <TextInput
        ref={countryFieldRef}
        onChangeText={() => {}}
        placeholder="Country"
      />

      <Button
        title={'Clear'}
        onPress={() => {
          //   countryFieldRef.current.focus();
          firstNameFieldRef.current.clear();
          lastNameFieldRef.current.clear();
          cityFieldRef.current.clear();
          countryFieldRef.current.clear();
        }}
      />
      <Text>{counter.current}</Text>
      <Text>{firstName}</Text>
      <Button
        title={'Increase count'}
        onPress={() => {
          counter.current += 1;

          firstName = 'counter value is:' + counter.current;

          console.log(counter.current);

          setCurrentDate(Date());
        }}
      />
    </View>
  );
};

export default TestRefScreen;
