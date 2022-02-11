import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import BookList from '../BookList/BookList';
import './BooksPage.scss';

const BooksPage = () => {
  const { books } = useSelector((state: RootState) => state);
  
  const getSquizedBookData = () => {
    console.log(books)
    const mappedBooks = books.map((book) => (
      {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        publishedYear: book.volumeInfo.publishedDate
      }
    ));
    return mappedBooks;
  }

  return (
    <div className='block'>
      <BookList
        books={getSquizedBookData()}
      />
    </div>
  );
}

export default BooksPage;
