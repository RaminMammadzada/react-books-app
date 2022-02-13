import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BooksPage from '../containers/BooksPage/BooksPage';
import Navbar from '../components/Navbar/Navbar';
import AboutPage from '../containers/AboutPage/AboutPage';
import BookmarksPage from '../containers/BookmarksPage/BookmarksPage';
import LoginPage from '../containers/LoginPage/LoginPage';
import SignupPage from '../containers/SignupPage/SignupPage';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () =>{

    return (
      <BrowserRouter>
        <Navbar />
        <div className='main-container'>
          <Routes>
            <Route path="/login" element={ <LoginPage />} />
            <Route path="/signup" element={ <SignupPage />} />
            <Route path="/about" element={ <AboutPage /> } />            

            <Route path="/" element={ <BooksPage />} />
            <Route
              path="/books"
              element={
                <PrivateRoute>
                  <BooksPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/bookmarks"
              element={
                <PrivateRoute>
                  <BookmarksPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default AppRoutes;
