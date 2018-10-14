import React from "react";
import { connect } from "react-redux";
import {
  detailDiv,
  stepsDiv,
  list,
  flex,
  separator,
  title
} from "../style/components/recipe.css";
import IngredientLine from "./ingredientLine";
import RecipeIntro from "./recipeIntro";
const Recipe = ({ recipeObj }) => {
  const stepsContent = recipeObj.steps
    ? recipeObj.steps.map((e, i) => {
        return (
          <div key={i}>
            <div className={flex}>
              <span className={title}> Step {i + 1}</span>
              <div className={separator} />
            </div>
            <p>{e.text}</p>
          </div>
        );
      })
    : "";
  const ingredientList = recipeObj.ingredients
    ? recipeObj.ingredients.map((e, i) => {
        return <IngredientLine key={i} object={e} />;
      })
    : "";
  const { steps, ingredients, ...introObj } = recipeObj;
  return (
    <div className="container">
      <RecipeIntro {...introObj} />
      <div className={detailDiv}>
        <div className={stepsDiv}>{stepsContent}</div>
        <div className={list}>
          <div className={title}>Ingredients </div>
          <ul>{ingredientList}</ul>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    recipeObj: state.items[ownProps.match.params.id]
  };
};
export default connect(mapStateToProps)(Recipe);
