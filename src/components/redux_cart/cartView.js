import React from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';

const CartView = props => {

  const cart = useSelector(state => state.cart.cartItems);

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10, borderRadius: 20 }}>
        <Button
          title="Back"
          style={{borderRadius:20}}
          onPress={() => {
            props.navigation.navigate('ProductList');
          }}
        />
      </View>
      <FlatList
        data={cart}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.nameText}>Name: {item.item.name}</Text>
            <Text style={styles.detailsText}>Details: {item.item.details}</Text>
            <Text style={styles.priceText}>Price: ${item.item.price}</Text>
            <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ecf0f1',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#3498db',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  detailsText: {
    fontSize: 14,
    color: '#ffffff',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  quantityText: {
    fontSize: 14,
    color: '#f39c12',
  },
});

export default CartView;
