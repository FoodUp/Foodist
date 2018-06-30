import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchFood } from '../actions/index';
import style from '../App.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.searchFood(this.inputRef.current.value);
        this.props.history.push(`search/${this.inputRef.current.value}`);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)} className={style.App}>
                <input ref = {this.inputRef} />
                <Link to="/shoppinglist">Go to shopping list </Link>
            </form>
        )
    }
}

const mapStateToProp= (state)=>{
    return {searchTerm: state.searchTerm}
}

export default connect(mapStateToProp, { searchFood })(HomePage);