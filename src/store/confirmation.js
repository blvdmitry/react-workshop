import { createSlice } from '@reduxjs/toolkit';

const confirmationSlice = createSlice({
  name: 'confirmation',
  initialState: {
    id: null,
  },
  reducers: {
    show: (state, action) => {
      state.id = action.payload;
    },
    hide: (state) => {
      state.id = null;
    },
  },
});

console.log(confirmationSlice);

export const { actions: confirmationActions, reducer: confirmationReducer } = confirmationSlice;
