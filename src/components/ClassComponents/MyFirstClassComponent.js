import React from 'react';
import {StyleSheet, Text} from 'react-native';

class MyFirstClassComponent extends React.Component {
  render() {
    return <Text style={style.header}>Basic Information</Text>;
  }
}

const style = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default MyFirstClassComponent;
