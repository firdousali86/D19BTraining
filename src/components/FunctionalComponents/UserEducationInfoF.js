import React,{useState} from 'react';
import { Text, View ,TextInput} from 'react-native';

const UserEducationInfoF = props => {

    const[educationInfo,setEducationInfo] = useState(props.educationInfo || {});
    const {lastDegree,university} = educationInfo;
    console.log(educationInfo);
    return <View>
        <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',color:'#fff',backgroundColor:'#D2691E',padding:10,borderRadius:10,marginBottom:20,marginTop:20}}>Education Info</Text>
      <View style={{backgroundColor:'#D8BFD8',padding:10}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:15,fontWeight:'bold',verticalAlign:'middle',width:'25%'}}>Last Degree:</Text>
          <TextInput 
          value={lastDegree}
          placeholder='Last Degree'
          onChangeText={changedText => {            
            setEducationInfo(prevEducationInfo => ({...prevEducationInfo,lastDegree:changedText}));
          }} style={{backgroundColor: '#fff',flex:1,borderWidth:2,borderRadius:5,marginHorizontal:10,}} />
        </View>
        <View style={{flexDirection: 'row',marginTop:10}}>
        <Text style={{fontSize:15,fontWeight:'bold',verticalAlign:'middle',width:'25%'}}>University:</Text>
          <TextInput 
          value={university}
          placeholder='University'
          onChangeText={changedText => {            
            setEducationInfo(prevEducationInfo => ({...prevEducationInfo,university:changedText}));
          }} style={{backgroundColor: '#fff',flex:1,borderWidth:2,borderRadius:5,marginHorizontal:10,}} />
        </View>
        </View>
    </View>
}
export default UserEducationInfoF;