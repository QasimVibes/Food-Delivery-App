import {createSlice} from '@reduxjs/toolkit';

const resetSlice = createSlice({
  name: 'reset',
  initialState: {},
  reducers: {
    resetStore: () => {},
  },
});

export const {resetStore} = resetSlice.actions;
export default resetSlice.reducer;
