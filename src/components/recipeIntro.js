import React from "react";
import { addToBasket, removeBasket } from "../actions/index";
import PropTypes from "prop-types";
import {
  titleDiv,
  img,
  intro,
  introDiv,
  number,
  tag,
  basket,
  addedBasket
} from "../style/components/recipeIntro.css";
import { timer, people } from "../style/shared/icon.css";
import { connect } from "react-redux";

const RecipeIntro = props => {
  const imageStyle = {
    backgroundImage: `url(${props.image})`
  };
  const tagList = props.tags.map(element => {
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
      <div className={titleDiv}>
        <h2> {props.name} </h2>
      </div>
      <div className={img} style={imageStyle} />
      <div className={intro}>
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
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  time: PropTypes.shape({
    amount: PropTypes.number.isRequired,
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
