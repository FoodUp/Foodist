import React from "react";
import { connect } from "react-redux";
import {
  flex,
  sl,
  slItem,
  itemImg,
  itemIntro,
  itemCheckList
} from "../style/components/shoppingList.css";
import _ from "lodash";
import IngredientLine from "./ingredientLine";

const ShoppingListPage = ({ addedRecipesArray }) => {
  const addedRecipesList = _.map(addedRecipesArray, recipeObj => {
    const ingredientList = recipeObj.ingredients
      ? recipeObj.ingredients.map((e, i) => {
          return <IngredientLine key={i} object={e} />;
        })
      : "";
    const personDiv = recipeObj.personRequired ? (
      <div>{recipeObj.personRequired}</div>
    ) : recipeObj.person ? (
      <div>{recipeObj.person}</div>
    ) : (
      ""
    );
    const imgStyle = {
      backgroundImage: `url("${recipeObj.image}")`
    };
    return (
      <li key={recipeObj.id} className={slItem}>
        <div className={itemIntro}>
          <div>{recipeObj.name}</div>
          {personDiv}
        </div>
        <div className={flex}>
          <div style={imgStyle} className={itemImg} />
          <div className={itemCheckList}>
            <ul>{ingredientList}</ul>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="page-container-responsive">
      <h2>shopping list </h2>
      <ul className={sl}>
        {addedRecipesList.length > 0
          ? addedRecipesList
          : "Shopping basket is empty"}
      </ul>
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
