import { createSlice } from '@reduxjs/toolkit';

const booksArray = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: booksArray,
  reducers: {
    addBook(state, action) {
      state.booksArray.push(action.payload);
    },

    removeBook(state, action) {
      state.booksArray.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const booksActions = booksSlice.actions;
export default booksSlice;
