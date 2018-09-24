import React, { Component }from 'react';
import { itemImg } from '../style/components/itemList.css';

class ProgressiveImage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    componentDidMount(){
        this.fetchImage(this.props.image);
    }
    fetchImage(src){
        const img = new Image();
        img.onload = ()=>{
            this.setState({ loading : false });
        };
        img.src = src;
    }
    render(){
        let style;
        if(!this.state.loading){
            style = {
                backgroundImage: `url(${this.props.image})`
            };
        }
        else{
            style = {
                backgroundColor: this.props.color?this.props.color:'#B9CFD4'
            };
        }
        return(
            <div className={ itemImg } style={ style }></div>        
        );
    }
}

export default ProgressiveImage;