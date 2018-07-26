import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { r , card , itemImg, title } from '../style/components/itemList.css';

const ItemList = (props) =>{
    const itemsList =  _.map(props.items, (item, id)=> {
        var itemStyle = {
            backgroundImage: `url(./image/recipes/${item.image})`
          };
        //const pathToImg = require.context("./image/recipes/", true);
        return (
            <div key={id} className={ card }> 
                <div className={ itemImg } style={ itemStyle }>
                </div>
                <div className ={ title }>{item.name}</div>                
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