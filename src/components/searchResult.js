import React ,{ Component }  from 'react';
import { connect } from 'react-redux';
import { searchItem } from '../actions/index';
import ItemsList from './itemsList';
import _ from 'lodash';

class SearchResultPage extends Component {
    componentDidMount(){
        this.props.searchItem(this.props.urlTerm);
    }
    render(){
        return(
            <div className="container">
                <ItemsList items = { this.props.searchResultItems } />
            </div>       
        );
    }
}

function searchInObject(obj, term){
    let filtered = _.pickBy(obj, function(element){
        //search by name anf type
        return element.name.toLowerCase().indexOf(term.toLowerCase())> -1 
            || element.type.toLowerCase().indexOf(term.toLowerCase())> -1 ;
    });
    return filtered;
}

function mapStateToProps(state, ownProps) {
    //TODO: transfer url param to meaningful search term , like 'sea-food' to 'sea food'
    let searchResultItems = searchInObject(state.items, ownProps.match.params.term);
    return { 
        urlTerm: ownProps.match.params.term ,
        searchResultItems: searchResultItems
    };
}

export default connect(mapStateToProps, { searchItem })(SearchResultPage);