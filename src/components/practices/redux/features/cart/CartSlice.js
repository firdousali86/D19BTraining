import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemToAdd = action.payload;
            state.cartItems.push(itemToAdd);
        },
        removeFromCart: (state, action) => { },
        clearToCart: (state) => { },
    }
});

export const { addToCart, removeFromCart, clearToCart } = CartSlice.actions
export default CartSlice.reducer