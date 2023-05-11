import React from 'react';
import styles from './BookList.module.css';

const BookList = (props) => {
  const { books } = props;
  const { deleteBookHandler } = props;

  return (
    <ul className={styles.books_container}>
      {books.map((book) => (
        <li key={book.item_id}>
          {book.title}
          {' '}
          ,
          {book.author}
          {' '}
          ,
          {book.category}
          <button type="button" onClick={() => deleteBookHandler(book.item_id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
