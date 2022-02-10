import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import Book from '../Book/Book';
import './BookList.scss';

const BookList = () => {
  const { books } = useSelector((state: RootState) => state);

  console.log(books)

  return (
    <div className='block'>
      {
        books.map((book) => {
          return <Book book={book}/>
        })
      }
    </div>
  );
  
};

export default BookList;
