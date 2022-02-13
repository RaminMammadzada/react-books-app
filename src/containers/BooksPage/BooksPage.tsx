import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../components/Search/Search';
import { fetchAllBooks } from '../../store/actions/books';
import { RootState } from '../../store/reducers';
import BookList from '../BookList/BookList';
import './BooksPage.scss';

const BooksPage = () => {
  const { books, searchQuery } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchAllBooks(searchQuery));
  }, [searchQuery, dispatch])

  
  const getSquizedBookData = () => {
    console.log(books)
    const mappedBooks = books.map((book) => (
      {
        title: book.volumeInfo.title,
        author: 'dsadas',
        publishedYear: book.volumeInfo.publishedDate
      }
    ));
    return mappedBooks;
  }

  return (
    <div className='block'>
      <Search />
      <BookList
        books={getSquizedBookData()}
      />
    </div>
  );
}

export default BooksPage;

