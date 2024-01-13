import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalCartItems:0
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemToAdd = action.payload;
           
            const itemPresentIndex = state.cartItems.findIndex(thisEl => {
                return thisEl.item.name === itemToAdd.name;
            })
            if (itemPresentIndex !== -1) {
                const incrementQut = state.cartItems[itemPresentIndex];
                incrementQut.quantity += 1;
            } else {
                state.cartItems.push({ item: itemToAdd, quantity: 1 });
            }
            const itemPresentIndex1 = state.cartItems.findIndex(thisEl => {
                return  state.totalCartItems += thisEl.quantity;
            })
            console.log(itemToAdd);
        },
        removeFromCart: (state, action) => {
            const itemToAdd = action.payload;

            const itemPresentIndex = state.cartItems.findIndex(thisEl => {
                return thisEl.item.name === itemToAdd.name;
            })
            if (itemPresentIndex !== -1) {
                state.cartItems.pop(itemPresentIndex);
            }
            const itemPresentIndex1 = state.cartItems.findIndex(thisEl => {
                return  state.totalCartItems += thisEl.quantity;
            })
        },
    
        clearToCart: (state) => { },
    }
});

export const { addToCart, removeFromCart, clearToCart } = CartSlice.actions
export default CartSlice.reducer