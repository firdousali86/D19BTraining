import React from 'react';
import {View, ActivityIndicator, FlatList, Text, Image} from 'react-native';

const TestCoreComponents = () => {
  return (
    <View style={{flex: 1}}>
      <ActivityIndicator animating={true} size="large" color="#00ff00" />
      <FlatList
        data={['Civic', 'Cultus', 'Corolla', 'Cuore', 'Duet']}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
      />
      <Image
        resizeMode={'center'}
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://www.thedrive.com/uploads/2022/04/24/NGAD-F22.jpg',
        }}
      />
    </View>
  );
};

export default TestCoreComponents;
