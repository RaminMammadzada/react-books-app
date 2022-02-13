import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookmark, fetchAllBookmarks, removeBookmark } from '../../store/actions/books';
import './Book.scss';

const Book = ({book}: any) => {
  const dispatch = useDispatch();

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
        <h4>{book.title}</h4>
        <p>publish year: {book.publishedYear}</p>
        <p>author: {book.author}</p>
        <div className='row mr-5'>
          <button className='mr-1' onClick={(e) => addBookToBookmarks(book)}>Add</button>
          {
            book.id ? <button onClick={(e) => removeBookFromBookmarks(book.id)}>Remove</button> : null
          }
        </div>
        <hr />
    </div>
  );
};

export default Book;


// addBookmark


// useEffect(() => {
//   dispatch(fetchAllBooks());
//   dispatch(fetchAllBookmarks());

// })

