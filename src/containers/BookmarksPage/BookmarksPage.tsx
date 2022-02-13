import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBookmarks } from '../../store/actions/books';
import { RootState } from '../../store/reducers';
import BookList from '../BookList/BookList';
import './BookmarksPage.scss';

const BookmarksPage = () => {
  const { bookmarks } = useSelector((state: RootState) => state);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBookmarks());
  }, [dispatch])

  return (
    <div className="block">
      <BookList books={bookmarks}/>
    </div>
  );
}

export default BookmarksPage;