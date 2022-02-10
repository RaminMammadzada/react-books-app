import React from 'react';

const Book = ({book}: any) => {
  console.log(book)
  return (
    <div className="book-link">
        <h1>book no {book.flight_number}</h1>
        <h1>launch year {book.launch_year}</h1>
        <hr />
    </div>
  );
};

export default Book;
