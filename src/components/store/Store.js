import {configureStore} from '@reduxjs/toolkit';
import counterSliceReducer from '../feature/CounterSlice';
import cartSliceReducer from '../feature/CartSlice';
import userReducer from '../feature/UserSlice';
import createSagaMiddleware from 'redux-saga';
import ItemSaga from '../sagas/ItemSaga';
import ApiItemSlice from '../feature/ApiItemSlice';
const sagaMiddleware = createSagaMiddleware();

console.log('store-----------------------------')

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    cart: cartSliceReducer,
    user: userReducer,
    apiItem: ApiItemSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(ItemSaga);

export default store;
