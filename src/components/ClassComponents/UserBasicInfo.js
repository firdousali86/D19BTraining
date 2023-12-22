import React, {Component} from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';

class UserBasicInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.basicInfo?.firstName,
      lastName: props.basicInfo?.lastName,
      gender: props.basicInfo?.gender,
      DOB: props.basicInfo?.DOB,
    };
  }

  render() {
    const {firstName, lastName, gender, DOB} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.imageRow}>
          <Image
            style={styles.image}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
        </View>
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
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
});

export default UserBasicInfo;
