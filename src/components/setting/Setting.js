import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {useTextContext} from './SettingContextApi';

const Setting = () => {
  const [selected, setSelected] = useState('');
  const {SetColorAction} = useTextContext();

  const SetColorData = val => {
    console.log(val)
    SetColorAction(val);
    setSelected(val);
  };

  const colorOptions = [
    { name: 'Brown', value: '#994F14' },
    { name: 'Red', value: '#DA291C' },
    { name: 'Yellow', value: '#FFCD00' },
    { name: 'Green', value: '#007A33' },
    { name: 'Pink', value: '#EB9CA8' },
    { name: 'Gray', value: '#7C878E' },
    { name: 'Purple', value: '#8A004F' },
    { name: 'Black', value: '#000000' },
    { name: 'Navy', value: '#10069F' },
    { name: 'Blue', value: '#00a3e0' },
    { name: 'Teal', value: '#4CC1A1' },
  ];

  return (
    <View style={{flex: 1, padding: 15}}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Selected Color is{' '}
      </Text>
      <View
        style={{
          padding: 10,
          marginBottom: 20,
          backgroundColor: selected,
        }}></View>
      <SelectList
        setSelected={val => SetColorData(val)}
        labelField="name" 
        valueField="value"
        data={colorOptions}
        save="value"
      />
    </View>
  );
};

export default Setting;
