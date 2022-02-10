const initialArray: any[] = [];

export default function books(state = initialArray, action: any) {
  if (action.type === 'ALL_BOOKS') {
    return [...state, ...action.payload];
  }

  return state;
}
