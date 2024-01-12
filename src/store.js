import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import cartReducer from './features/cart/cartSlice';
import {createLogger} from 'redux-logger';
// import {createFlipperMiddleware} from 'redux-flipper';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

// const flipperMiddleware = createFlipperMiddleware();

// middleware = __DEV__
//   ? [...getDefaultMiddleware().concat(logger), flipperMiddleware]
//   : [...getDefaultMiddleware()];

export default configureStore({
  reducer: {counter: counterReducer, cart: cartReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});
