import React from 'react';
import {View, Text, TextInput} from 'react-native';

class UserBasicInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.basicInfo?.firstName,
      DOB: props.basicInfo?.DOB,
      gender: props.basicInfo?.gender,
      lastName: props.basicInfo?.lastName,
      custom_margin: 2,
      custom_padding: 2,
    };
  }

  render() {
    const {basicInfo} = this.props;

    const {firstName, lastName, gender, DOB} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={changedText => {
              this.setState({firstName: changedText});
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={changedText => {
              this.setState({lastName: changedText});
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>DOB:</Text>
          <TextInput
            style={styles.input}
            placeholder="DOB"
            value={DOB}
            onChangeText={changedText => {
              this.setState({DOB: changedText});
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender:</Text>
          <TextInput
            style={styles.input}
            placeholder="Gender"
            value={gender}
            onChangeText={changedText => {
              this.setState({gender: changedText});
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = {
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
};

export default UserBasicInfo;
