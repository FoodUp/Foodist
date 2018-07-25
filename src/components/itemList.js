import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { r } from '../style/components/itemList.css';

const ItemList = (props) =>{
    const itemsList =  _.map(props.items, (item, id)=> {
        var itemStyle = {
            paddingTop : "33.3%",
            width: "100%",
            height: "200px",
            backgroundImage: `url(./image/recipes/${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          };
        //const pathToImg = require.context("./image/recipes/", true);
        return (
            <div key={id} > 
                <div>
                    <div style={ itemStyle }></div>
                </div>
                <span>{item.name}</span>
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