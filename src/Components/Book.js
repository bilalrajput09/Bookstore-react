import { useDispatch } from 'react-redux';
import styles from './Book.module.css';

import { deleteBook } from '../redux/books/action-thunks';

const Book = (props) => {
  const {
    title, author, category, id,
  } = props;
  const dispatch = useDispatch();

  return (
    <article>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{category}</p>
      <ul className={styles.book_btn_container}>
        <li>
          <button type="button">Comments</button>
        </li>
        <li>
          <button type="button" onClick={() => dispatch(deleteBook(id))}>
            Remove
          </button>
        </li>
        <li>
          <button type="button">Edit</button>
        </li>
      </ul>
    </article>
  );
};

export default Book;
