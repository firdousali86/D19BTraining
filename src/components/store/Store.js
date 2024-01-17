import {configureStore} from '@reduxjs/toolkit'
import counterSliceReducer from '../feature/CounterSlice'
import cartSliceReducer from '../feature/CartSlice'



export default configureStore({
    reducer:{
        counter:counterSliceReducer,
        cart:cartSliceReducer,
    },
})
