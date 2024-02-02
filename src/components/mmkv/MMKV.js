import React,{useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import  {MMKV}  from 'react-native-mmkv'

const MmkvDemo = () => {
  const [getEmail, setEmail] = useState();
  const [getPassword, setPassword] = useState();

   const storage = new MMKV()

const StoreMMKV = () => {
   storage.set('user', JSON.stringify({'email':getEmail,'password':getPassword}))
}

const GetMMKV = () => {
  const user = storage.getString('user') 
  console.log(user);
}


  return (
    <View style={{flex: 1}}>
      <View
        style={{backgroundColor: '#f0f8ff', padding: 15, borderBottomWidth: 1}}>
        <Text style={{textAlign: 'justify', fontSize: 15}}>
          This library aims to provide a fast & reliable solution for you data
          storage needs in react-native apps. It uses MMKV by Tencent under the
          hood on Android and iOS both that is used by their WeChat app(more
          than 1 Billion users). Unlike other storage solutions for React
          Native, this library lets you store any kind of data type, in any
          number of database instances, with or without encryption in a very
          fast and efficient way. Read about it on this blog post I wrote on
          dev.to
        </Text>
      </View>
      <View style={{padding: 15}}>
        <TextInput
          placeholder="Enter Email"
          style={mmkv.input}
          onChangeText={email => {
            setEmail(email);
          }}
        />
        <TextInput
          style={mmkv.input}
          placeholder="Enter Password"
          secureTextEntry
          onChangeText={pass => {
            setPassword(pass);
          }}
        />
      
      <Button
          title="Submit Data"
          onPress={() => {
            StoreMMKV()
          }}
        />
        <Button
          title="Show data"
          onPress={() => {
            GetMMKV()
          }}
        />

      </View>
    </View>
  );
};

const mmkv = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
});

export default MmkvDemo;
