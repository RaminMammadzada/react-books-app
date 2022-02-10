import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Books from './components/Books';
import { fetchAllBooks } from './store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://api.spacexdata.com/v3/launches';
    dispatch(fetchAllBooks(url));

  })

  return (
    <div>
      <h1>Hi Ramin!</h1>
      {/* <p>{books}</p> */}
      <Books />
    </div>
  );
}

export default App;
