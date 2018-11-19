import React from "react";
// import _ from "lodash";
import { r, c } from "../style/components/itemList.css";
import RecipeItem from "./recipeItem";

class ItemsList extends React.Component {
  render() {
    // const { items } = this.props;
    const itemsList = this.props.items.map(item => {
      return (
        <div className={c} key={item._id}>
          <RecipeItem item={item} />
        </div>
      );
    });
    return <div className={r}>{itemsList}</div>;
  }
}

export default ItemsList;
