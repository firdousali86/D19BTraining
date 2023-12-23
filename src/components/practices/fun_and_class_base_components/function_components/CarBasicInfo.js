import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

const CarBasicInfo = props => {
  const [basicInfo, setBasicInfo] = useState(props?.basicInfo || {});
  const {name, milage, speed} = basicInfo;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={changedText => {
              setBasicInfo(prevBasicInfo => ({
                ...prevBasicInfo,
                name: changedText,
              }));
            }}
          />
        
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Milage:</Text>
        <TextInput
          style={styles.input}
          placeholder="Milage"
          value={milage}
          onChangeText={changedText => {
            setBasicInfo(prevBasicInfo => ({
              ...prevBasicInfo,
              milage: changedText,
            }));
          }}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Speed:</Text>
        <TextInput
          style={styles.input}
          placeholder="Speed"
          value={speed}
          onChangeText={changedText => {
            setBasicInfo(prevBasicInfo => ({
              ...prevBasicInfo,
              speed: changedText,
            }));
          }}
        />
      </View>
    </View>
  );
};

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
});

export default CarBasicInfo;
