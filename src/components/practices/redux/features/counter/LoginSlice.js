import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        set: (state) => {
            console.log('Redux Set');
            console.log(state);
        },
        get: (state) => {
            console.log('Redux Get');
            console.log(state);
        },
    },
})

export const { increment, decrement } = LoginSlice.actions

export default LoginSlice.reducer