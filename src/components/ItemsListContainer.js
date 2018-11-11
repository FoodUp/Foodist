import ItemsList from "./itemsList";
import { connect } from "react-redux";
import { fetchItems } from "../actions";

const matchDispatchToProps = dispatch => {
  return { fetchItems: () => dispatch(fetchItems("")) };
};
//container component
export const ItemsListContainer = connect(
  state => ({
    items: state.items
  }),
  matchDispatchToProps
)(ItemsList);
export default ItemsListContainer;
