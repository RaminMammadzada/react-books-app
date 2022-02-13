import { combineReducers } from "redux";
import booksReducer from "./books";
import bookmarksReducer from "./bookmarks";
import searchQueryReducer from "./searchQuery";

const rootReducer = combineReducers({
    books: booksReducer,
    bookmarks: bookmarksReducer,
    searchQuery: searchQueryReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>