import { useRef } from 'react';
import styles from './InputBooks.module.css';

const InputBooks = (props) => {
  const inputRef = useRef();
  const { addBook } = props;
  const submitBookHandler = (e) => {
    e.preventDefault();
    addBook(inputRef.current.value);
  };
  return (
    <form onSubmit={submitBookHandler} className={styles.input_form}>
      <input ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputBooks;
