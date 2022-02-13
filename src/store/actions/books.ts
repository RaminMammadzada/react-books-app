// export const fetchAllBooks = (url: string) => ({
//     type: 'FETCH_ALL_BOOKS',
//     payload: url
// });

import { Book } from "../../interfaces/Book";
import { getAllBookmarksAsync, getBooksAsync, addBookmarkAsync, removeBookmarkAsync } from "../../services/booksApiService";

export const setAllBooks = (allBooks: any) => ({
    type: 'ALL_BOOKS',
    payload: allBooks,
});

export const setAllBookmarks = (allBookmarks: any) => ({
  type: 'ALL_BOOKMARKS',
  payload: allBookmarks,
});

export const setSearchQuery = (query: string) => ({
  type: 'SEARCH_QUERY',
  payload: query,
});

export function fetchAllBooks(query: string) {

    return function thunk(dispatch: Function) {
      if ( query.toString() !== '' ) {
        getBooksAsync(query.toString())
        .then((response) => {
          dispatch(setAllBooks(response.items));
        })
        .catch((error) => console.log('Error: ', error.message));
      }
    };
};

export function fetchAllBookmarks() {

  return function thunk(dispatch: Function) {
    getAllBookmarksAsync()
      .then((response) => {
        console.log("HERE: ", response)
        dispatch(setAllBookmarks(response));
      })
      .catch((error) => console.log('Error: ', error.message));
  };
};

export function addBookmark(book: Book) {

  return async function thunk(dispatch: Function) {
    await addBookmarkAsync(
      {
        title: book.title,
        author: book.author,
        etag: book.etag,
        publishedYear: book.publishedYear
      })
      .then((response) => {
        fetchAllBookmarks();
      })
      .catch((error) => console.log('Error: ', error.message));
  };
};

export function removeBookmark(bookId: number) {

  return function thunk(dispatch: Function) {
    removeBookmarkAsync(bookId)
      .then((response) => {
        fetchAllBookmarks();
      })
      .catch((error) => console.log('Error: ', error.message));
  };
};