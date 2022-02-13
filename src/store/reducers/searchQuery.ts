const initialValue = '';

const searchQueryReducer = (state = initialValue, action: any) => {
  if (action.type === 'SEARCH_QUERY') {
     return action.payload;
  }

  return state;
}

export default searchQueryReducer;
