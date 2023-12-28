import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const Details = ({navigation, route}) => {
  const [item, setItem] = useState(route.params);
  const keys = Object.keys(route.params);

  return (
    <View style={style.main_div}>
      <View style={style.main_screen_layout}>
        <Button
          title="Back"
          onPress={() => navigation.navigate('First', item)}
        />

        {keys.length > 0 ? (
          <Text style={style.formatted_text}>
            You can change the text, and go to back then this parent value are
            also change. Help of useEffect.
          </Text>
        ) : (
          <Text style={style.formatted_text}>No parameters provided</Text>
        )}

        {keys.length > 0
          ? keys.map(key => (
              <View key={key} style={style.label_container}>
                <Text style={style.label}>{'INDEX IS [' + key + ']'}</Text>
                <TextInput
                  key={key}
                  style={style.textInput}
                  value={item[key]}
                  onChangeText={changedText => {
                    setItem(prevItem => ({...prevItem, [key]: changedText}));
                  }}
                />
              </View>
            ))
          : null}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main_div: {
    flex: 1,
    backgroundColor: '#e8f0fe',
  },
  main_screen_layout: {
    margin: 10,
    flex: 1,
    backgroundColor: '#e8f0fe',
  },
  formatted_text: {
    flex: 1,
    maxHeight: 60,
    flexWrap: 'wrap',
    textAlign: 'justify',
    color: '#b7b407',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#b7b407',
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  label_container: {
    backgroundColor: '#00518e',
    borderColor: '#ddd',
    borderWidth: 5,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
  textInput: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Details;
