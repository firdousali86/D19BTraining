import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';

const DetailsScreen = props => {
  useEffect(() => {
    return () => {
      console.log('this component is getting deinitialized now');
      //assign nil to your complex datas
      //call stoplisteners to your events
      //nullify your timers
      //nullify your setintervals
    };
  }, []);

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

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('TestPureComponentScreen', {
            screen: 'Article',
          });
        }}>
        <Text>switch from nested navi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
