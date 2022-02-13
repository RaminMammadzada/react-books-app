import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.scss';

const Navbar = () => {
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
                <ul>
                    <li>
                        <Link to='login'>Login</Link>
                    </li>
                    <li>
                        <Link to='logouy'>Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;