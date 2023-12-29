import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';

const FastImageScreen = () => {
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  const image1 = {uri: 'https://picsum.photos/200/300?random=1'};
  const image2 = {uri: 'https://picsum.photos/200/300?random=2'};
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              alignSelf: 'flex-start',
            }}>
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image2}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image}
            />
            <FastImage
              style={{width: 100, height: 100, marginBottom: 5}}
              source={image1}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default FastImageScreen;
