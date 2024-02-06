import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  apiItem: [],
  isFetching: false,
  failure: false,
  errorMessage: undefined,
};

console.log('feature-----------------')
export const apiItemSlice = createSlice({
  name: 'apiSlice',
  initialState,
  reducers: {
    request: state => {
      // state.isFetching = true;
    },
    success: (state, action) => {
      state.apiItem = action.payload;
      
      state.isFetching = false;
      state.failure = false;
      state.errorMessage = undefined;
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
    },
  },
});

export const {request,success,failure} = apiItemSlice.actions;

export default apiItemSlice.reducer;
