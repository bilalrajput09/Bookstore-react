import { useState } from 'react';
import BookList from './BookList';
import InputBooks from './InputBooks';

const DisplayBooks = () => {
  const [books, setBooks] = useState([
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
  ]);
  const deleteBookHandler = (id) => {
    setBooks([...books.filter((book) => book.item_id !== id)]);
  };

  const addBook = (name) => {
    const newBook = {
      item_id: Math.random(),
      title: name,
      author: 'Leo Tolstoy',
      category: 'Fiction',
    };

    setBooks([...books, newBook]);
  };
  return (
    <>
      <BookList books={books} deleteBookHandler={deleteBookHandler} />
      <InputBooks addBook={addBook} />
    </>
  );
};

export default DisplayBooks;
