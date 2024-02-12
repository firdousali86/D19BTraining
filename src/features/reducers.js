import cartSlice from './cart/cartSlice';
import counterSlice from './counter/counterSlice';
import userSlice from './user/userSlice';
import itemsSlice from './items/itemsSlice';
import {itemApi} from '../services/itemApi';

export default {
  cart: cartSlice,
  user: userSlice,
  counter: counterSlice,
  items: itemsSlice,
  itemApi: itemApi.reducer,
};
