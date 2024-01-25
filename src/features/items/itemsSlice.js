import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isFetching: false,
  failure: false,
  errorMessage: undefined,
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.items = action.payload;
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

// Action creators are generated for each case reducer function
export const {request, success, failure} = itemsSlice.actions;

export default itemsSlice.reducer;
