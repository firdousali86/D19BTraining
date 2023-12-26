import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React, {useState} from 'react';

const ListScreen = props => {
  const [selectedCars, setSelectedCars] = useState([]);

  React.useEffect(() => {
    if (props.route.params?.currentSelectedCar) {
      setSelectedCars([
        ...selectedCars,
        props.route.params?.currentSelectedCar,
      ]);
    }
  }, [props.route.params?.currentSelectedCar]);

  return (
    <View>
      <Text>ListScreen</Text>
      <FlatList
        data={['cuore', 'city', 'corolla', 'civic', 'cultus']}
        renderItem={({item, index}) => {
          const checkInArray = selectedCars.findIndex(thisEl => {
            return thisEl === item;
          });

          const backgroundColor = checkInArray !== -1 ? 'red' : 'white';

          return (
            <View>
              <Text style={{backgroundColor: backgroundColor}}>{item}</Text>
              <Button
                title={'tap here'}
                onPress={() => {
                  props.navigation.navigate('DetailsScreen', {
                    selectedCar: item,
                  });
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
