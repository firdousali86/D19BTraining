import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter1',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            if(action.payload.action == 'increment'){
                state.value += action.payload.amount
            }
            if(action.payload.action == 'decrement'){
                state.value -= action.payload.amount
            }
            
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer