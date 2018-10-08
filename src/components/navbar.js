import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';
import { connect } from 'react-redux';

import { nav, logo, chef, basketIcon, basket, logoLink, quantity } from '../style/components/header.css';

const NavBar = ({ count }) => {
    const displayBasket = (count>0)?
                            (<div className={ basket }><div className={ basketIcon }></div><div className={ quantity }>{count}</div></div>)
                            :(<div className={ basketIcon }></div>);
    return (
        <nav className={nav}>
            <Link to="/" className={ logoLink } >
                <div className={`${logo}` }></div>
            </Link>
            <SearchBar />
            <Link to="/shoppinglist">
                { displayBasket }
            </Link>
            
            <div className={ chef }></div>                    
        </nav>
    );
}

const mapStateToProps = (state) =>{
    return { count : state.addedRecipes.length }
}
export default connect(mapStateToProps)(NavBar);