const initialArray = {};

export default function books(state: any = initialArray, action: any) {
  if (action.type === 'ALL_BOOKS') {
    return [...state, ...action.payload];
  }

  return state;
}
