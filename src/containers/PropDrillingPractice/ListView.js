import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {memo} from 'react';
import ListCellView from './ListCellView';

const ListView = props => {
  console.log('ListView rendered');

  return (
    <FlatList
      data={props.userObject.favCars}
      renderItem={({item, index}) => {
        return <ListCellView item={item} />;
      }}
    />
  );
};

export default memo(ListView);

const styles = StyleSheet.create({});
