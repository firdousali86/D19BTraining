import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice';
import cartReducer from './features/Cart/CartSlice';
export const store = configureStore({
    reducer: { counter: counterReducer, cart: cartReducer },
})