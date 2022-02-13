import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../../store/actions/auth';
import { RootState } from '../../store/reducers';
import './Navbar.scss';

const Navbar = () => {
    const { auth } = useSelector((state: RootState) => state);
    const currentUser = auth.user

    const dispatch = useDispatch();
    
    const location = useLocation();

    const logOut = useCallback(() => {
        dispatch(logout());
      }, [dispatch]);    

    return (
        <div className='navbar'>
            <div>
                <ul>
                    <li className={location.pathname === '/books' ? 'active' : ''}>
                        <Link to='books'>Books</Link>
                    </li>
                    <li className={location.pathname === '/about' ? 'active' : ''}>
                        <Link to='about'>About</Link>
                    </li>
                    <li className={location.pathname === '/bookmarks' ? 'active' : ''}>
                        <Link to='bookmarks'>Bookmarks</Link>
                    </li>
                </ul>
            </div>
            <div className='login-logout'>

                {currentUser ? (
                    <div>
                        <ul>
                            <li className={location.pathname === '/profile' ? 'active' : ''}>
                                <Link to={"/profile"} className="nav-link">
                                    {currentUser.username}
                                </Link>
                            </li>
                            <li className={location.pathname === '/login' ? 'active' : ''}>
                                <a href="/login" className="nav-link" onClick={logOut}>
                                    Log out
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div>
                        <ul>
                            <li className={location.pathname === '/login' ? 'active' : ''}>
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>

                            <li className={location.pathname === '/signup' ? 'active' : ''}>
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