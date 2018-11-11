import React from "react";
import _ from "lodash";
import { r, c } from "../style/components/itemList.css";
import RecipeItem from "./recipeItem";

class ItemsList extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    const { items } = this.props;
    const itemsList = _.map(items, (item, id) => {
      return (
        <div className={c} key={id}>
          <RecipeItem item={item} />
        </div>
      );
    });
    return <div className={r}>{itemsList}</div>;
  }
}

export default ItemsList;
