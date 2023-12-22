// plop-templates/component.hbs
import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

class UserBasicInfoList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      firstName: props.updatedInfo?.firstName,
      lastName: props.updatedInfo?.lastName,
      gender: props.updatedInfo?.gender,
      DOB: props.updatedInfo?.DOB,
    };
  }

  render() {
    const {firstName, lastName, gender, DOB} = this.props.updatedInfo;

    return (
      <View>
        <View>
          <Text style={styles.header}>Profile Listing</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCellHeader}>
              <Text style={styles.tableCellHeaderFont}>First Name</Text>
            </View>
            <View style={styles.tableCellHeader}>
              <Text style={styles.tableCellHeaderFont}>Last Name</Text>
            </View>
            <View style={styles.tableCellHeader}>
              <Text style={styles.tableCellHeaderFont}>Gender</Text>
            </View>
            <View style={styles.tableCellHeader}>
              <Text style={styles.tableCellHeaderFont}>DOB</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>{firstName}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{lastName}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{gender}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{DOB}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  table: {
    flexDirection: 'column',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableCellHeader: {
    flex: 1,
    paddingLeft: 20,
    paddingEnd: 20,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'lightgrey',
  },
  tableCellHeaderFont: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableCell: {
    flex: 1,
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default UserBasicInfoList;
