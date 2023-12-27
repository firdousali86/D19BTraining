import React from 'react';
import {View, Text} from 'react-native';

class UserBasicInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.basicInfo?.firstName,
      lastName: props.basicInfo?.lastName,
      styles: props.styles,
    };
  }

  render() {
    const {basicInfo} = this.props;
    const {styles} = this.state;

    return (
      <View>
        <Text style={styles.titles}>Basic Info</Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={styles.textCommon}>First Name:</Text>
          <Text
            style={{
              ...styles.textInputCommon,
              paddingVertical: 5,
              paddingHorizontal: 4,
            }}>
            {basicInfo?.firstName}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={styles.textCommon}>Last Name:</Text>
          <Text
            style={{
              ...styles.textInputCommon,
              paddingVertical: 5,
              paddingHorizontal: 4,
            }}>
            {basicInfo?.lastName}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={styles.textCommon}>Gender:</Text>
          <Text
            style={{
              ...styles.textInputCommon,
              paddingVertical: 5,
              paddingHorizontal: 4,
            }}>
            {basicInfo?.gender}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={styles.textCommon}>DOB:</Text>
          <Text
            style={{
              ...styles.textInputCommon,
              paddingVertical: 5,
              paddingHorizontal: 4,
            }}>
            {basicInfo?.DOB}
          </Text>
        </View>
      </View>
    );
  }
}

export default UserBasicInfo;
