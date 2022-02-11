import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../../store/actions';

const Book = ({book}: any) => {
  const dispatch = useDispatch();

  const addBookToBookmarks = (book: any) => {
    console.log('added ', book);
    dispatch(addBookmark(book));
  }

  return (
    <div className="block">
        <h4>{book.title}</h4>
        <p>publish year: {book.publishedYear}</p>
        <p>author: {book.author}</p>
        <button onClick={(e) => addBookToBookmarks(book)}>Add</button>
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

