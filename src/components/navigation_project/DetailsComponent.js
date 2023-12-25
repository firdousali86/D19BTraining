import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const DetailsComponent = ({navigation, route}) => {
  console.log(route);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{route.params}</Text>
      </View>
      <View style={{padding: 10}}>
        <Button
          style={{...styles.text, color: ''}}
          title="Go back"
          onPress={() => {
            navigation.popToTop();
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#3498db',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPressed: {
    backgroundColor: '#2980b9',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textPressed: {
    textDecorationLine: 'underline',
  },
});

export default DetailsComponent;
