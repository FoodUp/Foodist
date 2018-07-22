import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ul } from '../style/components/itemList.css';

const ItemList = (props) =>{
    const itemsList =  _.map(props.items, (item, id)=> {
        //const pathToImg = require.context("./image/recipes/", true);
        return (
            <li key={id} > 
                <div>
                    <img height="300" width="400" src={ `/image/recipes/${item.image}` } alt=""/>
                </div>
                <span>{item.name}</span>
            </li>
        );
    });
    return (
        <ul className ={ ul } >
            {itemsList}
        </ul>
    );
}
const mapStateToProp= state =>{
    return {items: state.items}
}
export default connect(mapStateToProp)(ItemList);