import styles from './Book.module.css';

const Book = (props) => {
  const { book, deleteBookHandler } = props;
  return (
    <article>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.category}</p>
      <ul className={styles.book_btn_container}>
        <li>
          <button type="button">Comments</button>
        </li>
        <li>
          <button type="button" onClick={() => deleteBookHandler(book.item_id)}>
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
