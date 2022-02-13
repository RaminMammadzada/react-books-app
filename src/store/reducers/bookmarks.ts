const initialArray: any[] = [];

export default function bookmarksReducer(state = initialArray, action: any) {
  if (action.type === 'ALL_BOOKMARKS') {
      return [...action.payload];
  }

  // if (action.type === 'ADD_BOOKMARK') {
  //     return [...state, ...action.payload];
  // }

  return state;
}
