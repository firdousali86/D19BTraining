import React from 'react';
import {View, Text, TextInput} from 'react-native';

class UserBasicInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.basicInfo?.firstName,
    };
  }

  render() {
    const {basicInfo} = this.props;

    const {firstName} = this.state;

    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>First Name: </Text>
          <TextInput
            style={{backgroundColor: 'grey', marginHorizontal: 10, flex: 1}}
            placeholder="First Name"
            value={firstName}
            onChangeText={changedText => {
              this.setState({firstName: changedText});
            }}
          />
        </View>

        <Text>Last Name: {basicInfo?.lastName}</Text>
        <Text>Gender: {basicInfo?.gender}</Text>
        <Text>DOB: {basicInfo?.DOB}</Text>
      </View>
    );
  }
}

export default UserBasicInfo;
