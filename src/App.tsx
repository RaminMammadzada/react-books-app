import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchAllBooks } from './store/actions';

function App() {
  const dispatch = useDispatch();
  // const { books } = useSelector((state) => state);

  useEffect(() => {
    const url = 'https://www.example.com';
    dispatch(fetchAllBooks(url));
  })

  return (
    <div>
      <h1>Hi Ramin!</h1>
      {/* <p>{books}</p> */}
    </div>
  );
}

export default App;
