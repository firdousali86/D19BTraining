import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import WithDataFetching from './WithDataFetching';

const TestHOC = ({data, loading, error}) => {
  const [textinput, settextinput] = useState('');
  //   const {movies, loading, error} = useFetchMovies(
  //     'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  //   );

  //   console.log(movies);
  console.log('==============');
  console.log(data);
  console.log('==============');

  return (
    <View>
      <Text>index</Text>
      <TextInput
        value={textinput}
        onChangeText={ct => {
          settextinput(ct);
        }}
        placeholder=""
        style={{backgroundColor: 'pink', height: 60, margin: 5}}
      />
    </View>
  );
};

export default WithDataFetching(
  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
)(TestHOC);

const styles = StyleSheet.create({});
