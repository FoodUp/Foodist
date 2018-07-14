import React, {Component} from 'react';
import { connect } from 'react-redux';
import { searchItem } from '../actions';
import { bindActionCreators } from 'redux';
import { search, cross } from '../style/shared/icon.css';
import { d0 } from '../style/components/searchBar.css';
//container component
class SearchBar extends Component{
    constructor(props) {
        super(props);
        //Controlled Components : form element's value is maintained and updated with setState()
        //Uncontrolled Components : use ref to get forms values instead of writing event handler for each elements
        this.state = { term : props.term }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({term : event.target.value});
    } 
    handleSubmit(event){
        event.preventDefault();
        if(this.state.term){
            this.props.searchItem(this.state.term);
            this.props.history.push(`search/${this.state.term}`);     
        }     
    }
    render(){
        return (
            <form className={d0} onSubmit={this.handleSubmit}>
                <button className={search}></button>
                <input type="text" value={this.state.term} onChange={this.handleChange.bind(this)} placeholder="Search" />
            </form>  
        )
    }
}
const mapStateToProp= state =>{
    return {term: state.searchTerm}
}
const mapDispatchToProps = dispatch => {
    // return {
    //   searchItem: (term) =>
    //     dispatch(searchItem(term))
    // }
    return bindActionCreators({ searchItem }, dispatch)
};

export default connect(mapStateToProp,mapDispatchToProps)(SearchBar);