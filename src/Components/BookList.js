import React from 'react';

const BookList = (props) => {
  const { books } = props;

  return (
    <ul>
      {books.map((book) => {
        return (
          <li>
            {book.title} ,{book.author} ,{book.category}
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
