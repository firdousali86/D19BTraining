import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalCartItems: 0
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemToAdd = action.payload;
            let total = 0;
            const itemPresentIndex = state.cartItems.findIndex(thisEl => {
                return thisEl.item.name === itemToAdd.name;
            })
            if (itemPresentIndex !== -1) {
                const incrementQut = state.cartItems[itemPresentIndex];
                incrementQut.quantity += 1;
            } else {
                state.cartItems.push({ item: itemToAdd, quantity: 1 });
            }
            state.cartItems.forEach(item => {
                total += item.quantity;
            });
            state.totalCartItems = total;
        },
        removeFromCart: (state, action) => {
            const itemToAdd = action.payload;
            let total = 0;

            const itemPresentIndex = state.cartItems.findIndex(thisEl => {
                return thisEl.item.name === itemToAdd.name;
            })
            if (itemPresentIndex !== -1) {
                state.cartItems.pop(itemPresentIndex);
            }
            
            state.cartItems.forEach(item => {
                total += item.quantity;
            });
            state.totalCartItems = total;

        },

        clearToCart: (state) => {
            state.cartItems = {};
            state.totalCartItems = 0;
         },
    }
});

export const { addToCart, removeFromCart, clearToCart } = CartSlice.actions
export default CartSlice.reducer