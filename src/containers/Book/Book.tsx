import React from 'react';

const Book = (props: any) => {

  return (
    <div className="book-link">
        <h1>sample book {props.book_id}</h1>
    </div>
  );
};

export default Book;
