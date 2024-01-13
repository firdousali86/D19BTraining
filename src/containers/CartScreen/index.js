import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const CartScreen = props => {
  const cart = useSelector(state => state.cart.cartItems);

  return (
    <View>
      <FlatList
        data={cart}
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
                <Text>{item.item.name}</Text>
                <Text>{item.item.details}</Text>
                <Text>{item.item.price}</Text>
              </View>
              <View>
                <Text>{item.quantity}</Text>
              </View>
              <TouchableOpacity onPress={() => {}}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
