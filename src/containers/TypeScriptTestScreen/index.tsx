import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const TypeScriptTestScreen = () => {
  let myname = 'Firdous Ali';

  console.log(typeof myname);

  let myage: number;
  let email: string;
  let isDrivingLicense: boolean;

  myage = 33;
  email = 'sdfsdsdf';
  isDrivingLicense = true;

  let mycars: string[];
  let myscore: number[];

  mycars = ['civic', 'cuore', 'corolla'];
  myscore = [33, 44, 55, 66];

  type Person = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    address: string[];
    phone?: string;
  };

  type PersonFB = {
    fullName: string;
    mobile: string;
    middleName: string;
  };

  type PersonGoogle = {
    middleName2: string;
  };

  type UniversalPerson = Person | PersonFB | PersonGoogle;

  type People = UniversalPerson[];

  let userObject: UniversalPerson = {
    firstName: 'sdfsdf',
    lastName: 'dsfgdsf',
    age: 33,
    email: 'sdfsdf',
    address: ['sdfsdf', 'sdfgsd', 'sdfsd', 'sdfd'],
  };

  let people: UniversalPerson[];

  people = [
    {
      firstName: 'ssd',
      lastName: 'dfdfd',
      age: 33,
      email: 'Sdsdf',
      address: ['sdsdf'],
      mobile: 'sdfsdf',
    },
    {
      firstName: 'ssd',
      lastName: 'dfdfd',
      age: 33,
      email: 'Sdsdf',
      address: ['sdsdf'],
    },
    {
      firstName: 'ssd',
      lastName: 'dfdfd',
      age: 33,
      email: 'Sdsdf',
      address: ['sdsdf'],
    },
    {mobile: 'Sdsdf', fullName: 'sdsdf', middleName: 'sdsd'},
  ];

  const add = (param1: number, param2: number): number => {
    return param1 + param2;
  };

  return (
    <View>
      <Text>index</Text>
      <Text>{myname}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default TypeScriptTestScreen;

const styles = StyleSheet.create({});
