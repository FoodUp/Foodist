import React from "react";
import { connect } from "react-redux";
import {
  img,
  intro,
  introDiv,
  number,
  tag,
  timer,
  people,
  detailDiv,
  steps,
  list,
  flex,
  separator,
  title
} from "../style/components/recipe.css";
import IngredientLine from "./ingredientLine";

const Recipe = ({ recipeObj }) => {
  const imageStyle = {
    backgroundImage: `url("/image/recipes/${recipeObj.image}")`
  };
  const tagList = recipeObj.tag.map(element => {
    return (
      <span className={tag} key={element}>
        {element}
      </span>
    );
  });
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

  return (
    <div className="container">
      <div className={introDiv}>
        <div className={img} style={imageStyle} />
        <div className={intro}>
          <h1> {recipeObj.name} </h1>
          <div className={number}>
            <span>
              <i className={timer} />
              {recipeObj.time.amount}
              {recipeObj.time.unit}
            </span>
            <span>
              <i className={people} /> {recipeObj.person} persons
            </span>
          </div>
          <p> {recipeObj.description}</p>
          <div>
            <span className={tag}> {recipeObj.type}</span>
            {tagList}
          </div>
        </div>
      </div>
      <div className={detailDiv}>
        <div className={steps}>{stepsContent}</div>
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
