import React from "react";
import { tag } from "../style/components/recipeIntro.css";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class RecipeTagLink extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onClickHandler = this.onClickHandler.bind(this);
  // }
  // onClickHandler() {
  //   this.props.history.push(`/search/${this.props.children}`);
  // }
  render() {
    return (
      <Link className={tag} to={`/search/${this.props.children}`}>
        {this.props.children}
      </Link>
    );
  }
}

export default withRouter(RecipeTagLink);
