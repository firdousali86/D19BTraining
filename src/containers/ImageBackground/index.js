import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

const ImageBackgroundScreen = () => {
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Welcome to our App</Text>
      </ImageBackground>
    </View>
  );
};

export default ImageBackgroundScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
