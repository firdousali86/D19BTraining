import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const DetailsScreen = props => {
  return (
    <View>
      <Text>DetailsScreen</Text>
      <Text>{props.route.params.selectedCar}</Text>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            name: 'ListScreen',
            params: {currentSelectedCar: props.route.params.selectedCar},
            merge: true,
          });
        }}>
        <Text>go back with changing props</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
