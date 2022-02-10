import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
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
    );
}

export default Navbar;