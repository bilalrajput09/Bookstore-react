import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categoriesArray: [], status: 'Under Construction' },
  reducers: {
    checkStatue(state) {
      state.status = 'Under Construction';
    },
  },
});
export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;
