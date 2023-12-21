import React from 'react';
import {View, Text, TextInput} from 'react-native';

class UserEducationInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastDegree: props.educationInfo?.lastDegree,
      university: props.educationInfo?.university,
   
    };
  }
  render() {
    const {educationInfo} = this.props;
    const {lastDegree,university} = this.state;
    return (
      <View>
        <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{width:'25%',paddingLeft:5,paddingLeft:5,fontSize:15,lineHeight:50}}>Last Degree:</Text>
          <TextInput style={{ backgroundColor: '#fff', marginHorizontal: 10, flex: 1,borderRadius:5, borderWidth:2,borderColor:'gray' }}
            placeholder='Last Degree'
            value={lastDegree}
            onChangeText={changedText => {
              this.setState({lastDegree:changedText});
            }}
          />
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{width:'25%',paddingLeft:5,paddingLeft:5,fontSize:15,lineHeight:50}}>University:</Text>
          <TextInput style={{ backgroundColor: '#fff', marginHorizontal: 10, flex: 1,borderRadius:5, borderWidth:2,borderColor:'gray' }}
            placeholder='University'
            value={university}
            onChangeText={changedText => {
              this.setState({university:changedText});
            }}
          />
        </View>
       
      </View>
    );
  }
}

export default UserEducationInfo;
