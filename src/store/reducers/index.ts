import { combineReducers } from "redux";
import books from "./books";
import bookmarks from "./bookmarks";
import searchQuery from "./searchQuery";

const rootReducer = combineReducers({
    books,
    bookmarks,
    searchQuery
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>