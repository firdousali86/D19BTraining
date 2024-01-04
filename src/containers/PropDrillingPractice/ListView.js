import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {memo} from 'react';
import ListCellView from './ListCellView';
import {useUserContext} from '../../contexts/UserContext';

const ListView = props => {
  console.log('ListView rendered');

  const userObject = useUserContext();

  return (
    <FlatList
      data={userObject?.favCars}
      renderItem={({item, index}) => {
        return <ListCellView item={item} />;
      }}
    />
  );
};

export default memo(ListView);

const styles = StyleSheet.create({});
