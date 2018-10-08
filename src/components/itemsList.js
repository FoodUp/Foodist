import React from 'react';
import _ from 'lodash';
import { r } from '../style/components/itemList.css';
import RecipeItem from './recipeItem';

const ItemsList = ({ items }) =>{
    const itemsList =  _.map(items, (item, id)=> {
        return (
            <RecipeItem item= {item} key= { id } />
        );
    });
    return (
        <div className ={ r } >
            {itemsList}
        </div>
    );
}

export default ItemsList;