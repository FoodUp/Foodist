import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import IngredientLine from "./ingredientLine";

const ShoppingListPage = ({ addedRecipesArray }) => {
  const addedRecipesList = _.map(addedRecipesArray, recipeObj => {
    console.log(recipeObj.ingredients);
    const ingredientList = recipeObj.ingredients
      ? recipeObj.ingredients.map((e, i) => {
          return <IngredientLine key={i} object={e} />;
        })
      : "";
    return (
      <li key={recipeObj.id}>
        <img
          src={`/image/recipes/${recipeObj.image}`}
          alt={recipeObj.name}
          height="200"
          width="200"
        />
        {recipeObj.name}
        {recipeObj.personRequired
          ? recipeObj.personRequired
          : recipeObj.person
            ? recipeObj.person
            : ""}
        <ul>{ingredientList}</ul>
      </li>
    );
  });
  return (
    <div className="container">
      <h2>shopping list </h2>
      <ul>{addedRecipesList}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  const addedRecipesArray = _.map(state.addedRecipes, e => {
    let addedRecipe = state.items[e.id];
    return {
      name: addedRecipe.name,
      id: e.id,
      image: addedRecipe.image,
      ingredients: addedRecipe.ingredients,
      person: addedRecipe.person ? state.items.person : 0,
      personRequired: e.person ? e.person : 0
    };
  });
  return { addedRecipesArray };
};
export default connect(mapStateToProps)(ShoppingListPage);
