import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const requestUniqueID = async () => {
  const response = axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
  );

  return response;
};

const uniqueID = 'tSyh5OC0OD5KNKMqRDAB';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${uniqueID}/books`;

export const fetchBooks = createAsyncThunk('get/books', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    return err;
  }
});

export const postBook = createAsyncThunk('post/book', async (data) => {
  try {
    await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data;
  } catch (err) {
    return err;
  }
});

export const deleteBook = createAsyncThunk('delete/book', async (id) => {
  try {
    await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${uniqueID}/books/${id}`,
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );

    return id;
  } catch (err) {
    return err;
  }
});
