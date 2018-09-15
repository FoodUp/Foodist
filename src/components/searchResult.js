import React ,{ Component }  from 'react';
import { connect } from 'react-redux';
import { searchItem } from '../actions/index';
import _ from 'lodash';

import { r , card , itemImg, title, time, addToBasket, shadow, imgWrapper } from '../style/components/itemList.css';
import { basket } from '../style/shared/icon.css';

class SearchResultPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.searchItem(this.props.urlTerm);
    }
    render(){
        const itemsList =  _.map(this.props.searchResultList, (item, id)=> {
            var itemStyle = {
                backgroundImage: `url(/image/recipes/${item.image})`
              };
            //const pathToImg = require.context("./image/recipes/", true);
            return (
                <div key={id} className={ card }> 
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
                </div>
            );
        });
        return(
            <div>
                search term : {this.props.term} 
                { itemsList }
            </div>        
        );
    }
}
/*
{
        "name": "Coco Mango Cube",
        "description" : "Refreshing dessert in summer day",
        "person" : 1, 
        "time": {
            "amount" : "20",
            "unit"   : "min"
        },
        "tag": [
            "tropical"
        ],
        "type": "dessert",
        "image" : "1.jpg",
        "tool": [
            {
                "name": "Glass Box",
                "quantity": 1
            }
        ]
    } */
function searchInArray(arr, term){
    let filtered = arr.filter(function(element){
        //search by name anf type
        return element.name.indexOf(term)> -1 || element.type.indexOf(term)> -1 ;
    });
    return filtered;
}

function mapStateToProps(state, ownProps) {
    //TODO: transfer url param to meaningful search term , like 'sea-food' to 'sea food'
    let searchResultList = searchInArray(state.items, ownProps.match.params.term);
    return { 
        urlTerm: ownProps.match.params.term ,
        searchResultList: searchResultList
    };
}

export default connect(mapStateToProps, { searchItem })(SearchResultPage);