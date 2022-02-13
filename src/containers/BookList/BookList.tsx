import React from 'react';
import Book from '../Book/Book';
import './BookList.scss';

const BookList = ({books}: any) => {

  console.log(books)

  return (
    <div className='block'>
      {
        books.length === 0
        ?
          <h1>Type something to search</h1>
        :
          books.map((book: any) => {
            return <Book key={book.bookIdFromGoogleApi} book={book}/>
          })
      }
    </div>
  );
  
};

export default BookList;
