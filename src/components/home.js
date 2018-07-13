import React from 'react';
import { Link } from 'react-router-dom';
import style from '../style/App.css';

import SearchBar from './searchBar';
import ItemList from './itemList';

const Home = (props) => {
    return (
        <div className = {style.App}>
            <SearchBar history = {props.history} />
            <Link to="/shoppinglist">Go to shopping list </Link>
            <ItemList />
        </div>
    );
}
export default Home;