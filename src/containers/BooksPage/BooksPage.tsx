import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../store/actions';
import { RootState } from '../../store/reducers';
import BookList from '../BookList/BookList';
import './BooksPage.scss';

const BooksPage = () => {
  const { books } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch])

  
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
