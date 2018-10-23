import React from "react";
import _ from "lodash";
import { r, c } from "../style/components/itemList.css";
import RecipeItem from "./recipeItem";

const ItemsList = ({ items }) => {
  const itemsList = _.map(items, (item, id) => {
    return (
      <div className={c} key={id}>
        <RecipeItem item={item} />
      </div>
    );
  });
  return <div className={r}>{itemsList}</div>;
};

export default ItemsList;
