import React from "react";
import { addToBasket, removeBasket } from "../actions/index";
import PropTypes from "prop-types";
import {
  img,
  intro,
  introDiv,
  number,
  tag,
  basket,
  addedBasket
} from "../style/components/recipe.css";
import { timer, people } from "../style/shared/icon.css";
import { connect } from "react-redux";

const RecipeIntro = props => {
  const imageStyle = {
    backgroundImage: `url("/image/recipes/${props.image}")`
  };
  const tagList = props.tag.map(element => {
    return (
      <span className={tag} key={element}>
        {element}
      </span>
    );
  });
  const personSpan = props.person ? (
    <span>
      <i className={people} /> {props.person} persons
    </span>
  ) : (
    ""
  );
  const despPara = props.description ? <p> {props.description}</p> : "";
  return (
    <div className={introDiv}>
      <div className={img} style={imageStyle} />
      <div className={intro}>
        <h1> {props.name} </h1>
        <div className={number}>
          <span>
            <i className={timer} />
            {props.time.amount}
            {props.time.unit}
          </span>
          {personSpan}
          <span
            onClick={() => {
              props.inBasket
                ? props.removeBasket(props.id)
                : props.addToBasket(props.id);
            }}
          >
            <i className={props.inBasket ? addedBasket : basket} />
          </span>
        </div>
        {despPara}
        <div>
          <span className={tag}> {props.type}</span>
          {tagList}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, { id }) => {
  return {
    inBasket:
      state.addedRecipes.findIndex(e => {
        return e.id === id;
      }) > -1
        ? true
        : false
  };
};

RecipeIntro.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.arrayOf(PropTypes.string).isRequired,
  time: PropTypes.shape({
    amount: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired
  }).isRequired,
  person: PropTypes.number,
  description: PropTypes.string,
  inBasket: PropTypes.bool.isRequired,
  addToBasket: PropTypes.func.isRequired,
  removeBasket: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { addToBasket, removeBasket }
)(RecipeIntro);
