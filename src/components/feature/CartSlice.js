import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      itemToAdd = action.payload;
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
    removeToCart: (state, action) => {
      itemToRemove = action.payload;
      const itemPresentIndex = state.cartItems.findIndex(thisEl => {
        return thisEl.item.name === itemToRemove.name;
      });

      if (itemPresentIndex !== -1) {
        const itemFoundObject = state.cartItems[itemPresentIndex];
        itemFoundObject.quantity -= 1;

        if (state.cartItems[itemPresentIndex].quantity == 0) {
          state.cartItems.splice(itemPresentIndex, 1);
        }
      }
    },
    removeAll: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const {addToCart, removeToCart, removeAll} = cartSlice.actions;

export default cartSlice.reducer;
