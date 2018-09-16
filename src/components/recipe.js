import React from 'react';
import { connect } from 'react-redux';
import { img, intro, flex, steps, tag } from '../style/components/recipe.css';
import { timer, pacman } from '../style/shared/icon.css';

const Recipe = ({match, recipeObj}) => {
    const imageStyle = {
        backgroundImage : `url("/image/recipes/${recipeObj.image}")`,
    }
    const tagList = recipeObj.tag.map((element)=>{
        return (<span className= {tag} key= {element}>{ element }</span>);
    });
    return (
        <div className ="container">
            <div className={flex}>
                <div className = { img } style = {imageStyle} ></div>
                <div className = { intro }>
                    <h2> { recipeObj.name }  </h2>
                    <p> { recipeObj.description }</p>
                    <div>
                        <span className={ timer } ></span>
                        {recipeObj.time.amount }  {recipeObj.time.unit} 
                        <span className={ pacman }></span>  { recipeObj.person } persons 
                    </div>
                    <div>
                        <span>{ recipeObj.type }</span>
                        {tagList}
                    </div>
                </div>
            </div>
            <div className ={ steps }>

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