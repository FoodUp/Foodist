import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';

import { nav, logo, chef, list, logoLink } from '../style/components/header.css';

const NavBar = (props) => {
    return (
        <nav className={nav}>
            <Link to="/" className={ logoLink } >
                <div className={`${logo}` }></div>
            </Link>
            <SearchBar />
            <Link to="/shoppinglist" className={ list }></Link>
            <div className={ chef }></div>                    
        </nav>
    );
}

export default NavBar;