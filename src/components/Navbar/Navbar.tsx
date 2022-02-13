import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout } from '../../store/actions/auth';
import { RootState } from '../../store/reducers';
import './Navbar.scss';

const Navbar = () => {
    const { auth } = useSelector((state: RootState) => state);
    const currentUser = auth.user

    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
      }, [dispatch]);    

    return (
        <div className='navbar'>
            <div>
                <ul>
                    <li>
                        <Link to='books'>Books</Link>
                    </li>
                    <li>
                        <Link to='about'>About</Link>
                    </li>
                    <li>
                        <Link to='bookmarks'>Bookmarks</Link>
                    </li>
                </ul>
            </div>
            <div className='login-logout'>

                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                        <ul>
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    {currentUser.username}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={logOut}>
                                    LogOut
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                        <ul>
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/signup"} className="nav-link">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Navbar;