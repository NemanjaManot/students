import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>University</Link></li>
                <li><Link to='/students'>Students</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header