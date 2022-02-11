import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBookmarks } from '../../store/actions';
import { RootState } from '../../store/reducers';
import BookList from '../BookList/BookList';
import './BookmarksPage.scss';

const BookmarksPage = () => {
  const { bookmarks } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchAllBookmarks());
  }, [])

  return (
    <div className="block">
      <BookList books={bookmarks}/>
    </div>
  );
}

export default BookmarksPage;