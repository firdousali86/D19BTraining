import React, {useState} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';

const SimpleForm = props => {
  const [inputText, setInputText] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const getDataFromInput = () => {
    if (inputText != '') {
      setSubmittedData([...submittedData, inputText]);
      setInputText('');
    }
  };

  const getClearData = () => {
    setSubmittedData([]);
    setInputText('');
  };

  console.log(props)

  return (
    <View style={{width: '100%'}}>
      <View style={{padding: 10}}>
        <Text style={styles.label}>Please enter you name </Text>
        <TextInput
          style={styles.input}
          onChangeText={newText => setInputText(newText)}
          value={inputText}
        />
        <View>
          <Button
            style={{marginBottom: 10}}
            title="Submit"
            onPress={getDataFromInput}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button title="Clear" onPress={getClearData} />
        </View>
        <View style={{marginTop: 10}}>
          <Button title="class user "  onPress={() => {
                props.navigation.navigate('classUser');
              }} />
        </View>
      </View>

      <FlatList
        data={submittedData}
        renderItem={({item}) => (
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
              backgroundColor: '#f0f8ff',
            }}>
            <Text style={styles.lisText}>{item}</Text>

            <Button
              title={'Show Details'}
              onPress={() => {
                props.navigation.navigate('Details',item);
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = {
  label: {
    fontSize: 20,
    marginBottom: 8,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#4285f4',
    color: '#fff',
  },

  lisText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export default SimpleForm;
