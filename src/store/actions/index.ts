// export const fetchAllBooks = (url: string) => ({
//     type: 'FETCH_ALL_BOOKS',
//     payload: url
// });

export const setAllMissions = (allBooks: any) => ({
    type: 'ALL_BOOKS',
    payload: allBooks,
});

export function fetchAllBooks(url: any) {
    return function thunk(dispatch: Function) {
      fetch(url).then((response) => response.json())
        .then((json) => {
          dispatch(setAllMissions(json));
        })
        .catch((error) => console.log('Error: ', error.message));
    };
};
