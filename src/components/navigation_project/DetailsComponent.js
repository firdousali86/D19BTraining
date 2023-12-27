import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const DetailsComponent = ({navigation, route}) => {
  const [firstName, setFirstName] = useState(route.params.item.firstName);
  const [lastName, setLastName] = useState(route.params.item.lastName);
  const{index} = route.params

  console.log(firstName);
  return (
    <View>
      <View style={styles.container}>
        <Text style={{...styles.text, marginTop: 10}}>
          First Name :- {firstName}
        </Text>
        <Text style={{...styles.text, marginTop: 10}}>
          Last Name :- {lastName}
        </Text>
      </View>

      <View style={{padding: 10}}>
        <TextInput
          style={route.params.style}
          placeholder="first name"
          onChangeText={newVal => setFirstName(newVal)}
          value={firstName}
        />

        <TextInput 
        style={route.params.style}
        placeholder='Last name'
        onChangeText={lastNew => setLastName(lastNew)}
        value={lastName}
        />

        

        <Button
          style={{...styles.text, color: ''}}
          title="update data"
        
          onPress={() => {
            
            navigation.navigate('Home', {
              firstName: firstName,
              lastName: lastName,
              index:index
            });
          }}
        />
        <View style={{marginTop: 10}}>
          <Button
            style={{...styles.text, color: ''}}
            title="Go back"
            onPress={() => {
              navigation.popToTop();
            }}
          />
        </View>
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
