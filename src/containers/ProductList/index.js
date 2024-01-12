import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  clearCart,
} from '../../features/cart/cartSlice';

const itemList = [
  {name: 'Macbook', details: 'Macbook pro with M2', price: 2500},
  {name: 'iPhone', details: 'iPhone 15 Max', price: 1500},
  {name: 'iPad', details: 'Sleek and smart', price: 800},
  {name: 'Tripod', details: 'Stable', price: 50},
  {name: 'Telescope', details: '13 inch', price: 500},
  {name: 'LED TV', details: 'True colors', price: 600},
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={itemList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: 'pink',
                marginVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.details}</Text>
                <Text>{item.price}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(addToCart(item));
                }}
                style={{backgroundColor: 'grey', padding: 10, borderRadius: 5}}>
                <Text>Add To Cart</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
