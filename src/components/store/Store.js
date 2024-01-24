import {configureStore} from '@reduxjs/toolkit'
import counterSliceReducer from '../feature/CounterSlice'
import cartSliceReducer from '../feature/CartSlice'
import userReducer from '../feature/UserSlice'

export default configureStore({
    reducer:{
        counter:counterSliceReducer,
        cart:cartSliceReducer,
        user:userReducer,
    },
})
