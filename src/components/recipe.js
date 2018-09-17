import React from 'react';
import { connect } from 'react-redux';
import { img, intro, introDiv, number, tag, timer, people,
    detailDiv, steps, list
} from '../style/components/recipe.css';

const Recipe = ({match, recipeObj}) => {
    const imageStyle = {
        backgroundImage : `url("/image/recipes/${recipeObj.image}")`,
    }
    const tagList = recipeObj.tag.map((element)=>{
        return (<span className= {tag} key= {element}>{ element }</span>);
    });
    const stepsContent = (recipeObj.steps)?
        recipeObj.steps.map((e, i) => {
            return (
                <div key= {i}>
                    Step {i+1}
                    <p>{ e.text }</p>
                </div>
                );
        }):'';
    const ingredientList = (recipeObj.ingredients)?
        recipeObj.ingredients.map((e, i) => {
            return (
                <li key= {i}>{ e.amount } { e.unit } { e.name }</li>
            )
        }):'';

    return (
        <div className ="container">
            <div className={ introDiv }>
                <div className = { img } style = {imageStyle} ></div>
                <div className = { intro }>
                    <h2> { recipeObj.name }  </h2>
                    <div className = { number }>
                        <span>
                            <i className={ timer } ></i>{recipeObj.time.amount }{recipeObj.time.unit}
                        </span>
                        <span>
                            <i className={ people }></i>  { recipeObj.person } persons 
                        </span>
                    </div>
                    <p> { recipeObj.description }</p>  
                    <div>
                        <span className= {tag}> { recipeObj.type }</span>
                        {tagList}
                    </div>
                </div>
            </div>
            <div className ={ detailDiv }>
                <div className={ steps } >
                    <p>Let's start ! </p>
                    
                    { stepsContent }
                </div>
               <div className={ list }>
                    <p>Ingredients </p>
                    <ul>
                        { ingredientList }
                    </ul>
                </div> 
                
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