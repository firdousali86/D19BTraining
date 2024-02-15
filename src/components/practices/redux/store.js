import { configureStore } from '@reduxjs/toolkit'

import sagas from '../sagas/Index'
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from '@reduxjs/toolkit';
import reducers from '../redux/features/Reducers';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
//import reducers from './redux/features/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';


let persistConfig = { key: 'root', storage: AsyncStorage };

let rootReducer = combineReducers(reducers);

let persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(sagaMiddleware),

});

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);