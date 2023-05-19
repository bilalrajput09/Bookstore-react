import { useDispatch } from 'react-redux';
import styles from './Book.module.css';

import { deleteBook } from '../redux/books/action-thunks';

const Book = (props) => {
  const {
    title, author, category, id,
  } = props;
  const dispatch = useDispatch();

  return (
    <article className={styles.article}>
      <div className={styles.book_details_main_container}>
        <p>{category}</p>
        <span>{title}</span>
        <h3>{author}</h3>
        <ul className={styles.book_btn_container}>
          <li>
            <button type="button" className={styles.comments}>
              Comments
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles.remove_btn}
              onClick={() => dispatch(deleteBook(id))}
            >
              Remove
            </button>
          </li>
          <li>
            <button type="button" className={styles.remove_btn}>
              Edit
            </button>
          </li>
        </ul>
      </div>

      <div className={styles.details_container}>
        <div className={styles.complete_details_container}>
          <div className={styles.progress} />
          <div className={styles.progress_details}>
            <h3>64%</h3>
            <p>Completed</p>
          </div>
        </div>

        <div>
          <div className={styles.chapter_container}>
            <span>CURRENT CHAPTER</span>
            <p>Chapter 17</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Book;
