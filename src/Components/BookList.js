import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './BookList.module.css';
import Book from './Book';
import { fetchBooks } from '../redux/books/action-thunks';

const BookList = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);
  const booksArrayIDs = Object.keys(books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <section className={styles.books_container}>
      {booksArrayIDs.map((id) => {
        const element = books[id][0];
        return (
          <>
            <Book
              key={id}
              title={element.title}
              author={element.author}
              category={element.category}
              id={id}
            />
          </>
        );
      })}
    </section>
  );
};

export default BookList;
