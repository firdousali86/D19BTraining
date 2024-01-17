import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { addToCart, removeToCart } from '../feature/CartSlice';
import { useSelector, useDispatch } from 'react-redux';

const ProductList = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems)
  console.log (cartItems)
  const itemList = [
    { name: 'apple', details: 'app', price: 200 },
    { name: 'banana', details: 'ban', price: 100 },
    { name: 'orange', details: 'ora', price: 150 },
    { name: 'grape', details: 'gra', price: 300 },
    { name: 'watermelon', details: 'wat', price: 500 },
    { name: 'strawberry', details: 'str', price: 250 },
    { name: 'kiwi', details: 'kiw', price: 120 },
    { name: 'pineapple', details: 'pin', price: 350 },
    { name: 'blueberry', details: 'blu', price: 180 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>{item.details}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => dispatch(addToCart(item))}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#e74c3c' }]} onPress={() => dispatch(removeToCart(item))}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>My Cart</Text>
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ecf0f1',
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
    textAlign: 'center',
    marginBottom: 15,
  },
  itemContainer: {
    backgroundColor: '#3498db',
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemDetails: {
    color: '#fff',
  },
  itemPrice: {
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
  },
};

export default ProductList;
