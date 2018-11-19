import React from "react";
import { tag } from "../style/components/recipeIntro.css";
import { withRouter } from "react-router";

class RecipeTagLink extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    this.props.history.push(`/search/${this.props.children}`);
  }
  render() {
    return (
      <span className={tag} onClick={this.onClickHandler}>
        {this.props.children}
      </span>
    );
  }
}

export default withRouter(RecipeTagLink);
