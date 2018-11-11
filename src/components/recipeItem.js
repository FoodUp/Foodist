import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { addToBasket, removeBasket } from "../actions/index";
import {
  card,
  title,
  time,
  basketContainer,
  addedBasketContainer,
  shadow,
  imgWrapper,
  itemText
} from "../style/components/recipeItem.css";
import { basket } from "../style/shared/icon.css";
import ProgressiveImage from "./progressiveImage";

const RecipeItem = ({ inBasket, item, addToBasket, removeBasket }) => {
  return (
    <div className={card}>
      <Link to={`/recipe/${item.id}`}>
        <div className={imgWrapper}>
          <ProgressiveImage image={item.image} color={item.color} />
          <div className={shadow} />
        </div>
      </Link>
      <div className={itemText}>
        <div className={title}>{item.name}</div>
        <div className={time}>
          {item.time.amount} {item.time.unit}
        </div>
        <div className={inBasket ? addedBasketContainer : basketContainer}>
          <div
            className={basket}
            onClick={() =>
              inBasket ? removeBasket(item.id) : addToBasket(item.id)
            }
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, { item }) => {
  return {
    inBasket:
      state.addedRecipes.findIndex(e => {
        return e.id === item.id;
      }) > -1
        ? true
        : false
  };
};
RecipeItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired
    })
  }),
  addToBasket: PropTypes.func.isRequired,
  removeBasket: PropTypes.func.isRequired,
  inBasket: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  { addToBasket, removeBasket }
)(RecipeItem);
