import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {View, Text, Button, FlatList} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const FastImageExample = () => {
  const [getNumberOfImg, setNumberOfImg] = useState('');
  const [getView, setView] = useState([]);

  const ViewWithLoop = () => {
    const prepareImages = [];
    for (let i = 0; i < getNumberOfImg; i++) {
      prepareImages[i] =  'https://unsplash.it/400/400?image=' + i ;
    }
    setView(prepareImages);
  };

  return (
    <View style={{flex: 1, padding: 10}}>
      <View style={{marginBottom: 10}}>
        <TextInput
          style={{backgroundColor: 'lightgray'}}
          placeholder="Number of Images"
          keyboardType="numeric"
          onChangeText={newImgNum => setNumberOfImg(newImgNum)}
        />
        <Button title="Generate" onPress={ViewWithLoop} />
        <View style={{marginTop: 10}}>
          <Button
            title="Clear Images"
            onPress={() => {
              setView([]);
            }}
          />
        </View>
      </View>
      <FlatList
        data={getView}
        numColumns={3}
        renderItem={({item}) => (
          <View style={{flex: 1, justifyContent: 'space-between'}}>
              <FastImage
                style={{width: 100, height: 100, marginBottom: 10}}
                source={{
                  uri: item,
                }}
              />
          </View>
        )}
      />
    </View>
  );
};

export default FastImageExample;
