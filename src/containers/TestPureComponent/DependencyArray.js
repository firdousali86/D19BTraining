import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const DependencyArray = props => {
  const {textValue} = props;

  useEffect(() => {
    console.log('Dependency Array Component');
  }, [textValue.firstName]);

  return (
    <View>
      <Text>Dependency Array</Text>
      <Text>{textValue.firstName}</Text>
    </View>
  );
};

export default DependencyArray;
