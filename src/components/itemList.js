import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { r , card , itemImg, title, time,  shadow, imgWrapper } from '../style/components/itemList.css';
import { basket } from '../style/shared/icon.css';
const ItemList = (props) =>{
    const itemsList =  _.map(props.items, (item, id)=> {
        var itemStyle = {
            backgroundImage: `url(./image/recipes/${item.image})`
          };
        //const pathToImg = require.context("./image/recipes/", true);
        return (
            <div key={id} className={ card }> 
                <div className={ imgWrapper }>
                    <div className={ itemImg } style={ itemStyle }></div>
                    <div className={ shadow }></div>
                </div>
                <div className ={ title }>{item.name}</div>
                <div className ={ basket }></div>           
                
                <div className = { time }>
                { item.time.amount } { item.time.unit }
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
const mapStateToProp= state =>{
    return {items: state.items}
}
export default connect(mapStateToProp)(ItemList);