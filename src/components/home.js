import React from 'react';
import ItemsList from './itemsList';
import { connect } from 'react-redux';

//container component
const ItemsListContainer = connect((state)=>({items : state.items}))(ItemsList);

const Home = (props) => {
    return (
        <div>
            <div className="container">
                <ItemsListContainer />
            </div>
        </div>
    );
}
export default Home;