import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      const {payload} = action;

      state.data = action.payload;

      if (
        payload?.id &&
        typeof payload.id === 'string' &&
        payload.id.length > 10
      ) {
        state.data.accessToken = payload.id;
      }

      state.isFetching = false;
      state.failure = false;
      state.errorMessage = undefined;
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
    },
    login: (state, action) => {
      state.data = action.payload;
    },
    logout: state => {
      state.data = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout, request, success, failure} = userSlice.actions;

export default userSlice.reducer;
