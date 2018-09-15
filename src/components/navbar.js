import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';

import { nav, logo, chef, list } from '../style/components/header.css';

const NavBar = (props) => {
    return (
        <nav className={nav}>
            <div className={`${logo}` }></div>
            <SearchBar />
            <Link to="/shoppinglist" className={ list }></Link>
            <div className={ chef }></div>                    
        </nav>
    );
}

export default NavBar;