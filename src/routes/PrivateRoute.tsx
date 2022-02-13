import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/reducers';


function PrivateRoute({ children }: any) {

    const { auth } = useSelector((state: RootState) => state);
    const currentUser = auth.user

    const isAuth = () => {
        return currentUser !== null;
    }
    return isAuth() ? children : <Navigate to="/login" />;
  }

export default PrivateRoute;