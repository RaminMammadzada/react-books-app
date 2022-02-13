import { combineReducers } from "redux";
import booksReducer from "./books";
import bookmarksReducer from "./bookmarks";
import searchQueryReducer from "./searchQuery";
import messageReducer from "./message";
import authReducer from "./auth";

const rootReducer = combineReducers({
    books: booksReducer,
    bookmarks: bookmarksReducer,
    searchQuery: searchQueryReducer,
    auth: authReducer,
    message: messageReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>