import React from 'react';
import styles from './BookList.module.css';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;
  const { deleteBookHandler } = props;

  return (
    <section className={styles.books_container}>
      {books.map((book) => (
        <Book
          key={book.item_id}
          book={book}
          deleteBookHandler={deleteBookHandler}
        />
      ))}
    </section>
  );
};

export default BookList;
