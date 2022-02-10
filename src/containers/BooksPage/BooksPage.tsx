import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import BookList from '../BookList/BookList';
import './BooksPage.scss';

const BooksPage = () => {
  const { books } = useSelector((state: RootState) => state);
  
  return (
    <div className='block'>
      <BookList books={books.map((book) => ({title: book.volumeInfo.title, publishedYear: book.volumeInfo.publishedDate}))}/>
    </div>
  );
}

export default BooksPage;
