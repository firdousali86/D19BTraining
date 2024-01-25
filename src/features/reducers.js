import cartSlice from './cart/cartSlice';
import counterSlice from './counter/counterSlice';
import userSlice from './user/userSlice';
import itemsSlice from './items/itemsSlice';

export default {
  cart: cartSlice,
  user: userSlice,
  counter: counterSlice,
  items: itemsSlice,
};
