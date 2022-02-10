import { combineReducers } from "redux";
import books from "./books";

const rootReducer = combineReducers({
    books
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>