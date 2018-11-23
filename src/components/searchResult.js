import React, { Component } from "react";
import { connect } from "react-redux";
import ItemsList from "./itemsList";
import { fetchItems } from "../actions";
import { getSearchItems, getIsFetching } from "../reducers";

class SearchResultPage extends Component {
  componentDidMount() {
    this.props.fetchItems(this.props.urlTerm);
  }
  componentDidUpdate(prevProps) {
    if (this.props.urlTerm !== prevProps.urlTerm) {
      this.props.fetchItems(this.props.urlTerm);
    }
  }
  render() {
    return (
      <div className="container">
        {this.props.isFetching ? (
          <div>loading </div>
        ) : (
          <ItemsList items={this.props.items} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //TODO: transfer url param to meaningful search term , like 'sea-food' to 'sea food'
  return {
    isFetching: getIsFetching(state),
    urlTerm: ownProps.match.params.term,
    items: getSearchItems(state)
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchItems: query => dispatch(fetchItems(query))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultPage);
