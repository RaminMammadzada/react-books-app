const initialArray: any[] = [];

export default function bookmarks(state = initialArray, action: any) {
  if (action.type === 'ALL_BOOKMARKS') {
      return [...state, ...action.payload]
  }

  return state;
}
