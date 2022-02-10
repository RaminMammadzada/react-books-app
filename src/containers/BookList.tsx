import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import Book from './Book';

const BookList = () => {
  const { books } = useSelector((state: RootState) => state);

  console.log(books)

  return (
    <div>
      <Book book_id={101}/>
      <Book book_id={202}/>
      <Book book_id={303}/>
      <Book book_id={404}/> 
      <Book book_id={505}/> 
      {/* {
        books.map((book) => {
          <Book book_id={101}/>
        })
      } */}
    </div>
  );
  
};

export default BookList;
