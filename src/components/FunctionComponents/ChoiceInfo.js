import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const ChoiceInfo = props => {
  const [colorAndPriceInfo, setColorAndPriceInfo] = useState(
    props?.colorAndPriceInfo || {},
  );
  const {price, color} = colorAndPriceInfo;
  console.log(colorAndPriceInfo);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={changedText => {
            setColorAndPriceInfo(prevBasicInfo => ({
              ...prevBasicInfo,
              price: changedText,
            }));
          }}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Color:</Text>
        <TextInput
          style={styles.input}
          placeholder="Color"
          value={color}
          onChangeText={changedText => {
            setColorAndPriceInfo(prevBasicInfo => ({
              ...prevBasicInfo,
              color: changedText,
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
export default ChoiceInfo;
