import React, { Component } from 'react';
import { box, selectedBox } from '../style/components/ingredientLine.css';

class IngredientLine extends Component{
    constructor(props){
        super(props);
        this.state = {
            "selected" : false
        }
    }
    onClick(){
        this.setState({'selected':  !this.state.selected});
    }
    render(){
        let boxClassName = this.state.selected ? selectedBox :box;
        return (
            <li onClick= { this.onClick.bind(this) }>
                <span className={ boxClassName }></span>
                { this.props.object.amount } { this.props.object.unit } { this.props.object.name } 
            </li>
        );
    }
}

export default IngredientLine;