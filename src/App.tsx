import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import AppRoutes from './AppRoutes';
import { fetchAllBookmarks, fetchAllBooks } from './store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
    dispatch(fetchAllBookmarks());
  })

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
