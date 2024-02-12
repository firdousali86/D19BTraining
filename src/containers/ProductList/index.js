import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {memo, useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  clearCart,
} from '../../features/cart/cartSlice';
import {increment, decrement} from '../../features/counter/counterSlice';
import {DataHelper, PersistanceHelper} from '../../helpers';
import auth from '@react-native-firebase/auth';
import MyList from './MyList';

const itemList = [
  {name: 'Macbook', details: 'Macbook pro with M2', price: 2500},
  {name: 'iPhone', details: 'iPhone 15 Max', price: 1500},
  {name: 'iPad', details: 'Sleek and smart', price: 800},
  {name: 'Tripod', details: 'Stable', price: 50},
  {name: 'Telescope', details: '13 inch', price: 500},
  {name: 'LED TV', details: 'True colors', price: 600},
];

const ProductList = props => {
  const dispatch = useDispatch();

  return (
    <View>
      <MyList
        addToCart={props.addToCart}
        itemList={itemList}
        backgroundColor="pink"
      />
      <Button
        title={'Go to Cart'}
        onPress={() => {
          props.navigation.navigate('CartScreen');
        }}
      />
      <Button
        title={'Clear Cart'}
        onPress={() => {
          // dispatch(clearCart());
          props.clearCart();
        }}
      />
      <Text>{props.cart.cartItems.length}</Text>

      <Text>{props.counter.value}</Text>

      <Button
        title={'Increase'}
        onPress={() => {
          // props.increment();
          DataHelper.incrementValue();
        }}
      />

      <Button
        title={'Decrease'}
        onPress={() => {
          // props.decrement();
        }}
      />

      <Button
        title={'Logout'}
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}
      />
    </View>
  );
};

// export default ProductList;

const mapStateToProps = state => ({
  cart: state.cart,
  counter: state.counter,
  user: state.user,
});

const actions = {addToCart, clearCart, increment, decrement};

export default connect(mapStateToProps, actions)(ProductList);

const styles = StyleSheet.create({});
