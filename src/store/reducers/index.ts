import { combineReducers } from "redux";
import books from "./books";
import bookmarks from "./bookmarks";

const rootReducer = combineReducers({
    books,
    bookmarks
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>