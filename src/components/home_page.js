import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchFood } from '../actions/index';

import '../style/components/homepage.scss';

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
            <div>
                 <div className ="SearchContainer">
                    <h1>Foodist</h1>
                    <h2>Stunning Food, Simple Recipe </h2>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input ref = {this.inputRef} />
                        <Link to="/shoppinglist">Go to shopping list </Link>
                    </form>
                </div>
                <div className ="CollectionContainer">
                    <ul></ul>
                </div>
            </div>
        )
    }
}

const mapStateToProp= (state)=>{
    return {searchTerm: state.searchTerm}
}

export default connect(mapStateToProp, { searchFood })(HomePage);