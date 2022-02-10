import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import BookList from '../BookList/BookList';
import './BookmarksPage.scss';

const BookmarksPage = () => {
  const { bookmarks } = useSelector((state: RootState) => state);
  return (
    <div className="block">
      <BookList books={bookmarks}/>
    </div>
  );
}

export default BookmarksPage;