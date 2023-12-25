import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements';

const FirstAssignment = props => {
  const [todoArr, setTodoArr] = useState([]);
  const [task, setTask] = useState('');

  return (
    <SafeAreaView style={stylesCss.safeAreaView}>
      <View style={stylesCss.mainView}>
        <View style={stylesCss.container}>
          <Text style={stylesCss.label}>First Assignment</Text>
        </View>
        <View style={stylesCss.inputContainer}>
          <TextInput
            onChangeText={changedText => {
              setTask(changedText);
            }}
            value={task}
            style={stylesCss.textInput}
          />
          <Button
            buttonStyle={{borderRadius: 10}}
            title="Add"
            onPress={() => {
              if (task !== '') {
                setTodoArr([...todoArr, task]);
                setTask('');
              }
            }}
          />
          <Button
            buttonStyle={{borderRadius: 10}}
            title="Clear"
            onPress={() => {
              setTodoArr([]);
              setTask('');
            }}
          />
        </View>
        <View style={stylesCss.flatListMain}>
          <FlatList
            data={todoArr}
            renderItem={({item}) => (
              <View style={stylesCss.flatListContainer}>
                <Text style={{alignItems: 'center'}}>{item}</Text>
                <Button
                  title={'view'}
                  onPress={() => {
                    props.navigation.navigate('Details', {item: item});
                  }}
                />
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const stylesCss = StyleSheet.create({
  safeAreaView: {flex: 1},
  mainView: {
    flex: 1,
    backgroundColor: '#e8f0fe',
    width: '100%',
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: '#00518e',
    borderColor: '#ddd',
    borderWidth: 5,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textInput: {
    width: '60%',
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
  },
  flatListContainer: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatListMain: {
    marginTop: 10,
    backgroundColor: '#00518e',
    borderRadius: 5,
  },
});

export default FirstAssignment;
