import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { r , card , itemImg, title, time, addToBasket, shadow, imgWrapper } from '../style/components/itemList.css';
import { basket } from '../style/shared/icon.css';

const ItemsList = ({ items }) =>{
    const itemsList =  _.map(items, (item, id)=> {
        var itemStyle = {
            backgroundImage: `url(/image/recipes/${item.image})`
          };
        //const pathToImg = require.context("./image/recipes/", true);
        return (
            
                <div  className={ card }> 
                    <Link to={`/recipe/${id}`} >  
                        <div className={ imgWrapper }>
                            <div className={ itemImg } style={ itemStyle }></div>
                            <div className={ shadow }></div>
                        </div>
                        <div>
                            <div className ={ title }>{item.name}</div>        
                            <div className = { time }>{ item.time.amount } { item.time.unit }</div>   
                            <div className ={ addToBasket }>
                                <div className = { basket }></div>
                            </div> 
                        </div>
                    </Link>
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