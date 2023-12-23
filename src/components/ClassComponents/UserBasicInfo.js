import React, {Component} from 'react';
import {AccessAlarm, ThreeDRotation} from '@mui/icons-material';

import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button,
  Switch,
} from 'react-native';
import {Tooltip} from 'react-native-elements';

class UserBasicInfo extends Component {
  constructor(props) {
    super(props);
    console.log('asd');
    this.state = {
      firstName: props.basicInfo?.firstName,
      lastName: props.basicInfo?.lastName,
      gender: props.basicInfo?.gender,
      DOB: props.basicInfo?.DOB,
      isEnabled: false,
    };
  }

  render() {
    const {firstName, lastName, gender, DOB} = this.state;
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.row}>

          <Tooltip popover={<Text>Info here</Text>}>
            <Text>Press me</Text>
          </Tooltip>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            // thumbColor={this.state.isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={bool => this.setState({isEnabled: bool})}
            value={this.state.isEnabled}
            style={{transform: [{scaleX: 0.4}, {scaleY: 0.4}]}}
          />
        </View>

        <View style={styles.imageRow}>
          <Image
            style={styles.image}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
        </View>

        <Button title="BTN" />

        <View style={styles.row}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={text => this.setState({firstName: text})}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={text => this.setState({lastName: text})}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>DOB:</Text>
          <TextInput
            style={styles.input}
            placeholder="DOB"
            value={DOB}
            onChangeText={text => this.setState({DOB: text})}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender:</Text>
          <TextInput
            style={styles.input}
            placeholder="Gender"
            value={gender}
            onChangeText={text => this.setState({gender: text})}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  input: {
    flex: 2,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
    fontSize: 16,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
});

export default UserBasicInfo;
