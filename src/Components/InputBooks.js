import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uid } from 'uid';
import styles from './InputBooks.module.css';
import { postBook } from '../redux/books/action-thunks';

const InputBooks = () => {
  const inputAuthor = useRef();
  const inputTitle = useRef();
  const selectRef = useRef();
  const dispatch = useDispatch();
  const submitBookHandler = (e) => {
    e.preventDefault();
    const ID = uid();
    dispatch(
      postBook({
        item_id: ID,
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
    <form onSubmit={submitBookHandler} className={styles.form_control}>
      <p>ADD NEW BOOK</p>
      <div className={styles.input_form}>
        <input ref={inputTitle} placeholder="Book title" required />
        <input ref={inputAuthor} placeholder="Book author" required />
        <select ref={selectRef} placeholder="category">
          <option>Action</option>
          <option>Nonfiction</option>
          <option>Fiction</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default InputBooks;
