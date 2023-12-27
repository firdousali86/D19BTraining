import React, {useState} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';

const userObject = {
  basicInfo: {
    firstName: 't',
    lastName: 'boss',
    gender: 'Male',
    DOB: 'Dec 3',
  },
  contactInfo: {
    cell: '123456789',
    email: 'ntboss@gmail.com',
    address: '123 street',
    city: 'AH',
    country: 'Bharat',
  },
  educationInfo: {
    lastDegree: 'MS',
    university: 'NEDUET',
  },
};

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

  React.useEffect(() => {
    if (props.route.params !== undefined) {
      console.log(props.route.params);
      const {firstName, lastName, index} = props.route.params;
      const updatedData = [...submittedData];
      updatedData[index] = {firstName, lastName};
      setSubmittedData(updatedData);
    }
  }, [props.route.params]);

  return (
    <View style={{width: '100%'}}>
      <View style={{padding: 10}}>
        <Text style={styles.label}>Please enter you name </Text>
        <TextInput
          style={styles.input}
          placeholder="first name"
          onChangeText={newText =>
            setInputText(preData => ({...preData, firstName: newText}))
          }
          value={inputText.firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="last name"
          onChangeText={lastText =>
            setInputText(preData => ({...preData, lastName: lastText}))
          }
          value={inputText.lastName}
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
          <Button
            title="class user "
            onPress={() => {
              props.navigation.navigate('classUser', userObject);
            }}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button
            title="Funcational Component"
            onPress={() => {
              props.navigation.navigate('functionalComponent', userObject);
            }}
          />
        </View>
      </View>

      <FlatList
        data={submittedData}
        renderItem={({index, item}) => (
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
              backgroundColor: '#f0f8ff',
            }}>
            <Text style={styles.lisText}>{item.firstName}</Text>
            <Text style={styles.lisText}>{item.lastName}</Text>
            <Text style={styles.lisText}>{index}</Text>

            <Button
              title={'Show Details'}
              onPress={() => {
                props.navigation.navigate('Details', {
                  item: item,
                  index: index,
                  style: styles.input,
                });
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
  },
};

export default SimpleForm;
