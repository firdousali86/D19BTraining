import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ListCellView from './ListCellView';

const ListView = () => {
  return (
    <FlatList
      data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
      renderItem={({item, index}) => {
        return <ListCellView item={item} />;
      }}
    />
  );
};

export default ListView;

const styles = StyleSheet.create({});
