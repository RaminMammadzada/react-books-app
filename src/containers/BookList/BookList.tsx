import React from 'react';
import Book from '../Book/Book';
import './BookList.scss';

const BookList = ({books}: any) => {

  console.log(books)

  return (
    <div className='block'>
      {
        books.map((book: any) => {
          return <Book key={`${book.publishedYear}-${book.title.substring(0,5)}`} book={book}/>
        })
      }
    </div>
  );
  
};

export default BookList;
