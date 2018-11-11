import React from "react";
import Recipe from "./recipe";
import { connect } from "react-redux";
import { fetchItemById } from "../actions";

class RecipeContainer extends React.Component {
  componentDidMount() {
    if (!this.props.recipeObj) {
      this.props.fetchItemById(this.props.id);
    }
  }
  render() {
    const { recipeObj } = this.props;
    return recipeObj ? (
      <Recipe recipeObj={recipeObj} />
    ) : (
      <div> Not Found </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    recipeObj: state.items[ownProps.match.params.id],
    id: ownProps.match.params.id
  };
};

const mapDispatchToProps = dispatch => {
  return { fetchItemById: id => dispatch(fetchItemById(id)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeContainer);
