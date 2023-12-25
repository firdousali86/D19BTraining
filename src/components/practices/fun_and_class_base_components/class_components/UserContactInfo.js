import React from 'react';
import { View, Text, TextInput } from 'react-native';

class UserContactInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cell: props.contactInfo?.cell,
      email: props.contactInfo?.email,
      address: props.contactInfo?.address,
      city: props.contactInfo?.city,
      country: props.contactInfo?.country,
      custom_margin: 2,
      custom_padding: 2,
    };
  }
  render() {
    const { contactInfo } = this.props;
    const { cell, email, address, city, country } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>Phone: </Text>
          <TextInput
            style={styles.input}
            placeholder="Cell"
            value={cell}
            onChangeText={changedText => {
              this.setState({ cell: changedText });
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email: </Text>
          <TextInput
            style={styles.input}
            placeholder="Cell"
            value={email}
            onChangeText={changedText => {
              this.setState({ email: changedText });
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address: </Text>
          <TextInput
            style={styles.input}
            placeholder="Cell"
            value={address}
            onChangeText={changedText => {
              this.setState({ address: changedText });
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Country: </Text>
          <TextInput
            style={styles.input}
            placeholder="Cell"
            value={country}
            onChangeText={changedText => {
              this.setState({ country: changedText });
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

export default UserContactInfo;
