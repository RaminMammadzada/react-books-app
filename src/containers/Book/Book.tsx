import React from 'react';

const Book = ({book}: any) => {
  console.log(book)
  return (
    <div className="block">
        <h4>{book.title}</h4>
        <p>publish year: {book.publishedYear}</p>
        <hr />
    </div>
  );
};

export default Book;
