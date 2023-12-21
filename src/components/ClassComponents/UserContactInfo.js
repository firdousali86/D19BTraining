import React from 'react';
import {View, Text, TextInput} from 'react-native';

class UserContactInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cell: props.contactInfo?.cell,
      email: props.contactInfo?.email,
      address: props.contactInfo?.address,
      city: props.contactInfo?.city,
      country: props.contactInfo?.country,
    };
  }

  render() {
    const {contactInfo} = this.props;
    const {cell,email,address,city,country} = this.state;
    return (
      <View>
        <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{width:'25%',paddingLeft:5,paddingLeft:5,fontSize:15,lineHeight:50}}>Cell:</Text>
          <TextInput style={{ backgroundColor: '#fff', marginHorizontal: 10, flex: 1,borderRadius:5, borderWidth:2,borderColor:'gray' }}
            placeholder='Cell'
            value={cell}
            onChangeText={changedText => {
              this.setState({cell:changedText});
            }}
          />
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{width:'25%',paddingLeft:5,paddingLeft:5,fontSize:15,lineHeight:50}}>Email:</Text>
          <TextInput style={{ backgroundColor: '#fff', marginHorizontal: 10, flex: 1,borderRadius:5, borderWidth:2,borderColor:'gray' }}
            placeholder='Email'
            value={email}
            onChangeText={changedText => {
              this.setState({email:changedText});
            }}
          />
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{width:'25%',paddingLeft:5,paddingLeft:5,fontSize:15,lineHeight:50}}>Address:</Text>
          <TextInput style={{ backgroundColor: '#fff', marginHorizontal: 10, flex: 1,borderRadius:5, borderWidth:2,borderColor:'gray' }}
            placeholder='Address'
            value={address}
            onChangeText={changedText => {
              this.setState({address:changedText});
            }}
          />
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{width:'25%',paddingLeft:5,paddingLeft:5,fontSize:15,lineHeight:50}}>City:</Text>
          <TextInput style={{ backgroundColor: '#fff', marginHorizontal: 10, flex: 1,borderRadius:5, borderWidth:2,borderColor:'gray' }}
            placeholder='City'
            value={city}
            onChangeText={changedText => {
              this.setState({city:changedText});
            }}
          />
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{width:'25%',paddingLeft:5,paddingLeft:5,fontSize:15,lineHeight:50}}>Country:</Text>
          <TextInput style={{ backgroundColor: '#fff', marginHorizontal: 10, flex: 1,borderRadius:5, borderWidth:2,borderColor:'gray' }}
            placeholder='Country'
            value={country}
            onChangeText={changedText => {
              this.setState({country:changedText});
            }}
          />
        </View>
        
      </View>
    );
  }
}

export default UserContactInfo;
