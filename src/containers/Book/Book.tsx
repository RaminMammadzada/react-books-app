import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addBookmark, fetchAllBookmarks, removeBookmark } from '../../store/actions/books';
import { RootState } from '../../store/reducers';
import './Book.scss';

const Book = ({book}: any) => {
  const [bookAddedFlag, setBookAddedFlag] = useState(0);
  const dispatch = useDispatch();
  const location = useLocation();
  const { bookmarks } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchAllBookmarks());
  }, [dispatch, bookAddedFlag])


  const isAlreadyAdded = (book: any) => {
    console.log('Bookmarks: ', bookmarks);
    return bookmarks.find( ({etag}) => etag === book.etag) 
  }

  const addBookToBookmarks = (book: any) => {
    if (isAlreadyAdded(book)) {
      console.log('Already added!');
      
      setBookAddedFlag(-1);
      setTimeout(function(){
        setBookAddedFlag(0);
      }, 1500);

    } else {
      console.log('added ', book);
      dispatch(addBookmark(book));

      setBookAddedFlag(1);
      setTimeout(function(){
        setBookAddedFlag(0);
      }, 1500);
    }
  }

  const removeBookFromBookmarks = (bookId: any) => {
    dispatch(removeBookmark(bookId));
    dispatch(fetchAllBookmarks());
  }

  return (
    <div className="book-block">
        <div className="details">
          <h4>{book.title}</h4>
          <p>publish year: {book.publishedYear}</p>
          <p>author: {book.author}</p>
        </div>

        <div className="d-flex flex-column align-items-center">
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
          
          {
            bookAddedFlag !== 0
            ? ( bookAddedFlag === 1
              ? <p className="">Added successfully!</p>
              : <p className="">Already added!</p> )
            : null            
          }
        </div>
    </div>
  );
};

export default Book;
