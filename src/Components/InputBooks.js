import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uid } from 'uid';
import { booksActions } from '../redux/books/booksSlice';
import styles from './InputBooks.module.css';

const InputBooks = () => {
  const inputAuthor = useRef();
  const inputTitle = useRef();
  const selectRef = useRef();
  const dispatch = useDispatch();
  const submitBookHandler = (e) => {
    e.preventDefault();
    dispatch(
      booksActions.addBook({
        item_id: uid(),
        title: inputTitle.current.value,
        author: inputAuthor.current.value,
        category: selectRef.current.value,
      }),
    );
    inputAuthor.current.value = '';
    inputTitle.current.value = '';
    inputAuthor.current.blur();
    inputTitle.current.blur();
  };
  return (
    <form onSubmit={submitBookHandler} className={styles.input_form}>
      <input ref={inputTitle} placeholder="title" required />
      <input ref={inputAuthor} placeholder="author" required />
      <select ref={selectRef}>
        <option>Action</option>
        <option>Nonfiction</option>
        <option>Fiction</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default InputBooks;
