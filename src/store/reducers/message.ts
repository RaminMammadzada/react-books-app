import { SET_MESSAGE, CLEAR_MESSAGE } from "../constrants";

const initialState = {message: ''};

const messageReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}

export default messageReducer;