import {StyleSheet, Text, View,TextInput} from 'react-native';
import React,{useState} from 'react';

const UserContactInfoF = props => {
  const[contactInfo,setContactInfo] = useState(props.contactInfo || {});
  const {cell,email,address,city,country}= contactInfo;
  console.log(contactInfo);
  return (
    <View>
       <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',color:'#fff',backgroundColor:'#D2691E',padding:10,borderRadius:10,marginBottom:20,marginTop:20}}>Contact Info</Text>
      <View style={{backgroundColor:'#D8BFD8',padding:10}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,fontWeight:'bold',verticalAlign:'middle',width:'25%'}}>Phone:</Text>
          <TextInput 
          value={cell}
          placeholder='Phone'
          onChangeText={changedText => {            
            setContactInfo(prevContactInfo => ({...prevContactInfo,cell:changedText}));
          }} style={{backgroundColor: '#fff',flex:1,borderWidth:2,borderRadius:5,marginHorizontal:10,}} />
        </View>
        <View style={{flexDirection: 'row',marginTop:10}}>
        <Text style={{fontSize:15,fontWeight:'bold',verticalAlign:'middle',width:'25%'}}>Email:</Text>
          <TextInput 
          value={email}
          placeholder='Email'
          onChangeText={changedText => {            
            setContactInfo(prevContactInfo => ({...prevContactInfo,email:changedText}));
          }} style={{backgroundColor: '#fff',flex:1,borderWidth:2,borderRadius:5,marginHorizontal:10,}} />
        </View>
        <View style={{flexDirection: 'row',marginTop:10}}>
        <Text style={{fontSize:15,fontWeight:'bold',verticalAlign:'middle',width:'25%'}}>Address:</Text>
          <TextInput 
          value={address}
          placeholder='Address'
          onChangeText={changedText => {            
            setContactInfo(prevContactInfo => ({...prevContactInfo,address:changedText}));
          }} style={{backgroundColor: '#fff',flex:1,borderWidth:2,borderRadius:5,marginHorizontal:10,}} />
        </View>
        <View style={{flexDirection: 'row',marginTop:10}}>
        <Text style={{fontSize:15,fontWeight:'bold',verticalAlign:'middle',width:'25%'}}>City:</Text>
          <TextInput 
          value={city}
          placeholder='City'
          onChangeText={changedText => {            
            setContactInfo(prevContactInfo => ({...prevContactInfo,city:changedText}));
          }} style={{backgroundColor: '#fff',flex:1,borderWidth:2,borderRadius:5,marginHorizontal:10,}} />
        </View>
        <View style={{flexDirection: 'row',marginTop:10}}>
        <Text style={{fontSize:15,fontWeight:'bold',verticalAlign:'middle',width:'25%'}}>Country:</Text>
          <TextInput 
          value={country}
          placeholder='Country'
          onChangeText={changedText => {            
            setContactInfo(prevContactInfo => ({...prevContactInfo,country:changedText}));
          }} style={{backgroundColor: '#fff',flex:1,borderWidth:2,borderRadius:5,marginHorizontal:10,}} />
        </View>
      
        </View>
    </View>
  );
};

export default UserContactInfoF;

const styles = StyleSheet.create({});
