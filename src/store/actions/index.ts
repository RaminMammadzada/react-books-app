// export const fetchAllBooks = (url: string) => ({
//     type: 'FETCH_ALL_BOOKS',
//     payload: url
// });

import { getAllBookmarks, getBooks } from "../../util/api";

export const setAllBooks = (allBooks: any) => ({
    type: 'ALL_BOOKS',
    payload: allBooks,
});

export const setAllBookmarks = (allBookmarks: any) => ({
  type: 'ALL_BOOKMARKS',
  payload: allBookmarks,
});

export function fetchAllBooks() {

    return function thunk(dispatch: Function) {
      getBooks('javascript')
        .then((response) => {
          dispatch(setAllBooks(response.items));
        })
        .catch((error) => console.log('Error: ', error.message));
    };
};

export function fetchAllBookmarks() {

  return function thunk(dispatch: Function) {
    getAllBookmarks()
      .then((response) => {
        console.log("HERE: ", response)
        dispatch(setAllBookmarks(response));
      })
      .catch((error) => console.log('Error: ', error.message));
  };
};