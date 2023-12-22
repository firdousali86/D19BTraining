import {StyleSheet, Text, View, TextInput,Image} from 'react-native';
import React, {useState} from 'react';

const UserBasicInfoF = props => {

  const[basicinfo,setBasicInfo] = useState(props.basicInfo || {});
  const {firstName,lastName,gender,dob} = basicinfo;
  console.log(basicinfo);

  return (
    <View>
      <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',color:'#fff',backgroundColor:'#D2691E',padding:10,borderRadius:10,marginBottom:20}}>Basic Info</Text>
      <View style={{backgroundColor:'#D8BFD8',padding:10}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,fontWeight:'bold',verticalAlign:'middle',width:'25%'}}>Image: </Text>
        <Image
        resizeMode='cover'
        style={styles.logo}
        fadeDuration={5000}
        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'        
      />
      </View>
      <View style={{flexDirection: 'row',marginTop:10}}>
        <Text style={{fontSize:15,fontWeight:'bold',verticalAlign:'middle',width:'25%'}}>First Name: </Text>
        <TextInput
          value={firstName}
          placeholder="First Name"
          onChangeText={changedText => {            
            setBasicInfo(prevBasicInfo => ({...prevBasicInfo,firstName:changedText}));
          }}
          style={{backgroundColor: '#fff',flex:1,borderWidth:2,borderRadius:5,marginHorizontal:10,}}
        />
      </View>
        <View style={{flexDirection: 'row',marginTop:10}}>
          <Text style={{fontSize:15,fontWeight:'bold',verticalAlign:'middle',width:'25%'}}>Last Name:</Text>
          <TextInput 
          value={lastName}
          placeholder='Last Name'
          onChangeText={changedText => {            
            setBasicInfo(prevBasicInfo => ({...prevBasicInfo,lastName:changedText}));
          }} style={{backgroundColor: '#fff',flex:1,borderWidth:2,borderRadius:5,marginHorizontal:10,}}/>
        </View>
        <View style={{flexDirection: 'row',marginTop:10}}>
          <Text style={{fontSize:15,fontWeight:'bold',verticalAlign:'middle',width:'25%'}}>Gender:</Text>
          <TextInput 
          value={gender}
          placeholder='Gender'
          onChangeText={changedText => {            
            setBasicInfo(prevBasicInfo => ({...prevBasicInfo,gender:changedText}));
          }} style={{backgroundColor: '#fff',flex:1,borderWidth:2,borderRadius:5,marginHorizontal:10,}}/>
        </View>
        <View style={{flexDirection: 'row',marginTop:10}}>
        <Text style={{fontSize:15,fontWeight:'bold',verticalAlign:'middle',width:'25%'}}>Dob:</Text>
          <TextInput 
          value={dob}
          placeholder='Dob'
          onChangeText={changedText => {            
            setBasicInfo(prevBasicInfo => ({...prevBasicInfo,dob:changedText}));
          }} style={{backgroundColor: '#fff',flex:1,borderWidth:2,borderRadius:5,marginHorizontal:10,}}/>
        </View>
        </View>
    </View>
  );
};

export default UserBasicInfoF;

const styles = StyleSheet.create({
  logo:{
    width:100,
    height:100,
    borderRadius:100
  }
});
