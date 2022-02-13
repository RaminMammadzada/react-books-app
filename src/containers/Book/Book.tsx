import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addBookmark, fetchAllBookmarks, removeBookmark } from '../../store/actions/books';
import './Book.scss';

const Book = ({book}: any) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const addBookToBookmarks = (book: any) => {
    console.log('added ', book);
    dispatch(addBookmark(book));
  }

  const removeBookFromBookmarks = (bookId: any) => {
    dispatch(removeBookmark(bookId));
    dispatch(fetchAllBookmarks());
  }

  return (
    <div className="book-block">
        <div className='details'>
          <h4>{book.title}</h4>
          <p>publish year: {book.publishedYear}</p>
          <p>author: {book.author}</p>
        </div>

        <div className=''>
          {
            location.pathname === '/books'
            ? <Button className='mr-1' onClick={(e) => addBookToBookmarks(book)}>Add</Button>
            : null
          }
          {
            location.pathname === '/bookmarks'
            ? <Button onClick={(e) => removeBookFromBookmarks(book.id)}>Remove</Button>
            : null
          }
          
        </div>
        <hr />
    </div>
  );
};

export default Book;
