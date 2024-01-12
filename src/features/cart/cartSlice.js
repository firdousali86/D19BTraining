import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;

      const itemPresentIndex = state.cartItems.findIndex(thisEl => {
        return thisEl.item.name === itemToAdd.name;
      });

      if (itemPresentIndex !== -1) {
        //record found
        const itemFoundObject = state.cartItems[itemPresentIndex];
        itemFoundObject.quantity += 1;
      } else {
        //record not found
        state.cartItems.push({item: itemToAdd, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {},
    clearCart: state => {},
  },
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

// [
//   {
//     item: {name: 'Macbook', details: 'Macbook pro with M2', price: 2500},
//     quantity: 2,
//   },
//   {item: {name: 'iPhone', details: 'iPhone 15 Max', price: 1500}, quantity: 4},
// ];
