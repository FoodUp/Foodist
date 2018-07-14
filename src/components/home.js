import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';
import ItemList from './itemList';
//global style
import '../style/App.css';
// explict style
import { nav, logo, chef, list } from '../style/components/header.css';

const Home = (props) => {
    return (
        <div>
            <header>
                <nav className={nav}>
                    <div className={`${logo}` }></div>
                    <SearchBar history = {props.history} />
                    <Link to="/shoppinglist" className={ list }></Link>
                    <div className={ chef }></div>                    
                </nav>
            </header>
            <ItemList />
        </div>
    );
}
export default Home;