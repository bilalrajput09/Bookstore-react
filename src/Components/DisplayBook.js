import { useSelector } from 'react-redux';
import BookList from './BookList';
import InputBooks from './InputBooks';

const DisplayBooks = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <>
      <BookList books={books} />
      <InputBooks />
    </>
  );
};

export default DisplayBooks;
