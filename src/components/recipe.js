import React from 'react';
import { connect } from 'react-redux';

const Recipe = ({match, recipeObj}) => {
    const imageStyle = {
        backgroundImage : `url("/image/recipes/${recipeObj.image}")`,
        backgroundRepeat : 'no-repeat',
        height: '200px'
    }
    const tagList = recipeObj.tag.map((element)=>{
        return (<span key= {element}>{ element }</span>);
    });
    return (
        <div>
            <h2> { recipeObj.name }  </h2>
            <p> { recipeObj.description }</p>
            <div style = {imageStyle} ></div>
            <div>
                {tagList}
            </div>
        </div>
       
    );
}
const mapStateToProps = (state, ownProps)=>{
    return {
        recipeObj : state.items[ownProps.match.params.id]
    };
}
export default connect(mapStateToProps)(Recipe);