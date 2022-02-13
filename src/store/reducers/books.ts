const initialArray: any[] = [];

const booksReducer = (state = initialArray, action: any) => {
  if (action.type === 'ALL_BOOKS') {
     return [...action.payload];
  }

  return state;
}

export default booksReducer;