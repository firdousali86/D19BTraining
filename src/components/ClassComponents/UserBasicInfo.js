import React from 'react';
import {View, Text, TextInput} from 'react-native';

class UserBasicInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.basicInfo?.firstName,
      lastName: props.basicInfo?.lastName,
      gender: props.basicInfo?.gender,
      dob: props.basicInfo?.DOB,
    };
  }

  render() {
    const {basicInfo} = this.props;

    const {firstName,lastName,gender,dob} = this.state;

    return (
      <View>
        <View style={{flexDirection: 'row',marginTop:10}}>
          <Text style={{width:'25%',paddingLeft:5,fontSize:15,lineHeight:50}}>First Name:</Text>
          <TextInput
            style={{ backgroundColor: '#fff', marginHorizontal: 10, flex: 1,borderRadius:5, borderWidth:2,borderColor:'gray'}}
            placeholder="First Name"
            value={firstName}
            onChangeText={changedText => {
              this.setState({firstName: changedText});
            }}
          />
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{width:'25%',paddingLeft:5,fontSize:15,lineHeight:50}}>Last Name:</Text>
          <TextInput style={{backgroundColor: '#fff', marginHorizontal: 10, flex: 1, borderRadius:5,borderWidth:2,borderColor:'gray' }}
            placeholder='Last Name'
            value={lastName}
            onChangeText={changedText => {
              this.setState({lastName:changedText});
            }}
          />
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
          <Text style={{width:'25%',paddingLeft:5,paddingLeft:5,fontSize:15,lineHeight:50}}>Gender:</Text>
          <TextInput style={{backgroundColor: '#fff', marginHorizontal: 10, flex: 1,borderRadius:5, borderWidth:2,borderColor:'gray' }}
            placeholder='Last Name'
            value={gender}
            onChangeText={changedText => {
              this.setState({gender:changedText});
            }}
          />
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{width:'25%',paddingLeft:5,paddingLeft:5,fontSize:15,lineHeight:50}}>DOB: </Text>
          <TextInput style={{ backgroundColor: '#fff', marginHorizontal: 10, flex: 1,borderRadius:5, borderWidth:2,borderColor:'gray' }}
            placeholder='DOB'
            value={dob}
            onChangeText={changedText => {
              this.setState({dob:changedText});
            }}
          />
        </View>
       
      </View>
    );
  }
}

export default UserBasicInfo;
