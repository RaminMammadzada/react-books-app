import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksPage from './containers/BooksPage/BooksPage';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './containers/AboutPage/AboutPage';
import BookmarksPage from './containers/BookmarksPage/BookmarksPage';
import LoginPage from './containers/LoginPage/LoginPage';
import SignupPage from './containers/SignupPage/SignupPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <div className='main-container'>
      <Routes>
        <Route path="/books" element={ <BooksPage /> }/>
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/bookmarks" element={ <BookmarksPage/> } />
        <Route path="/" element={ <BooksPage />} />
        
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/signup" element={ <SignupPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
