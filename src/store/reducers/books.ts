const initialArray: any[] = [];

export default function books(state = initialArray, action: any) {
  if (action.type === 'ALL_BOOKS') {
     return [...action.payload];
  }

  return state;
}
