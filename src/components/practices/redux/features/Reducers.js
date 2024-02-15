import counterReducer from './counter/counterSlice';
import cartReducer from './cart/CartSlice';
import itemReducer from './Items/itemSlice';
export default {
    counter: counterReducer,
    cart: cartReducer,
    item: itemReducer,
}