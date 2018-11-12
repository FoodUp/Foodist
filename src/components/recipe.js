import React from "react";
import {
  detailDiv,
  stepsDiv,
  stepItem,
  list,
  titleDiv,
  separator,
  title
} from "../style/components/recipe.css";
import IngredientLine from "./ingredientLine";
import RecipeIntro from "./recipeIntro";

const Recipe = ({ recipeObj }) => {
  const { steps, ingredients, ...introObj } = recipeObj;
  const stepsContent = steps
    ? steps.map((e, i) => {
        return (
          <li key={i} className={stepItem}>
            <div className={titleDiv}>
              <span className={title}> Step {i + 1}</span>
              <div className={separator} />
            </div>
            <p>{e.text}</p>
          </li>
        );
      })
    : "";
  const ingredientList = ingredients
    ? ingredients.map((e, i) => {
        return <IngredientLine key={i} object={e} />;
      })
    : "";

  return (
    <div className="container">
      <RecipeIntro {...introObj} />
      <div className={detailDiv}>
        <div className={list}>
          <div className={title}>Ingredients </div>
          <ul>{ingredientList}</ul>
        </div>
        <ul className={stepsDiv}>{stepsContent}</ul>
      </div>
    </div>
  );
};

export default Recipe;
