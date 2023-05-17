import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uid } from 'uid';
import { booksActions } from '../redux/books/booksSlice';
import styles from './InputBooks.module.css';

const InputBooks = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const submitBookHandler = (e) => {
    e.preventDefault();
    dispatch(
      booksActions.addBook({
        item_id: uid(),
        title: inputRef.current.value,
        author: 'Richard Dawkins',
        category: 'Nonfiction',
      }),
    );
  };
  return (
    <form onSubmit={submitBookHandler} className={styles.input_form}>
      <input ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputBooks;
