import { createSlice } from '@reduxjs/toolkit';
import { deleteBook, fetchBooks, postBook } from './action-thunks';

const initalAppState = {
  books: [],
  isSuccess: false,
  isLoading: true,
  hasError: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState: initalAppState,

  extraReducers: {
    [postBook.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
      const { title, author, category } = payload;
      state.books = {
        ...state.books,
        [payload.item_id]: [
          {
            title,
            author,
            category,
          },
        ],
      };
    },

    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload || [];
    },

    [deleteBook.fulfilled]: (state, action) => {
      delete state.books[action.payload];
    },
  },
});

export const booksActions = booksSlice.actions;
export default booksSlice;
