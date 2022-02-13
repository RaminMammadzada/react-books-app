import { combineReducers } from "redux";
import booksReducer from "./books";
import bookmarksReducer from "./bookmarks";
import searchQueryReducer from "./searchQuery";
import messageReducer from "./message";

const rootReducer = combineReducers({
    books: booksReducer,
    bookmarks: bookmarksReducer,
    searchQuery: searchQueryReducer,
    message: messageReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>