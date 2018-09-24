import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { r , card , itemImg, title, time, addToBasket, shadow, imgWrapper } from '../style/components/itemList.css';
import { basket } from '../style/shared/icon.css';
import ProgressiveImage from './progressiveImage';

const ItemsList = ({ items }) =>{
    const itemsList =  _.map(items, (item, id)=> {
        return (
                <div className={ card } key = { id }> 
                    <Link to={`/recipe/${id}`} >  
                        <div className={ imgWrapper }>
                            <ProgressiveImage image = {`/image/recipes/${item.image}`} color = {item.color}/>
                            <div className={ shadow }></div>
                        </div>
                    </Link>
                        <div>
                            <div className ={ title }>{item.name}</div>        
                            <div className = { time }>{ item.time.amount } { item.time.unit }</div>   
                            <div className ={ addToBasket }>
                                <div className = { basket }></div>
                            </div> 
                        </div>
                    
                </div>
            
        );
    });
    return (
        <div className ={ r } >
            {itemsList}
        </div>
    );
}

export default ItemsList;