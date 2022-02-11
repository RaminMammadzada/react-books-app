const initialValue = '';

export default function searchQuery(state = initialValue, action: any) {
  if (action.type === 'SEARCH_QUERY') {
     return action.payload;
  }

  return state;
}



