import React from "react";
import ItemsList from "./itemsList";
import { connect } from "react-redux";
import { fetchItems } from "../actions";
import { getAllItems } from "../reducers/index";

class ItemsListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    return <ItemsList items={this.props.items} />;
  }
}

const matchDispatchToProps = dispatch => {
  return { fetchItems: () => dispatch(fetchItems("")) };
};
//container component
export default connect(
  state => ({
    items: getAllItems(state)
  }),
  matchDispatchToProps
)(ItemsListContainer);
