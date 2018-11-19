import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { d0, search, cross } from "../style/components/searchBar.css";

//container component
class SearchBar extends Component {
  constructor(props) {
    super(props);
    //Controlled Components : form element's value is maintained and updated with setState()
    //Uncontrolled Components : use ref to get forms values instead of writing event handler for each elements
    this.state = { term: this.props.term };
    this.textInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputText = this.clearInputText.bind(this);
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.term !== prevProps.term) {
      this.setState({ term: this.props.term });
    }
  }
  clearInputText() {
    this.setState({ term: "" });
  }
  handleChange(event) {
    this.setState({ term: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.term.trim() !== "") {
      this.textInput.current.blur();
      this.props.history.push(`/search/${this.state.term}`);
    }
  }
  render() {
    const closeBtn =
      this.state.term !== "" ? (
        <button className={cross} onClick={this.clearInputText} />
      ) : (
        ""
      );
    return (
      <form className={d0} onSubmit={this.handleSubmit}>
        <button className={search} />
        <input
          ref={this.textInput}
          type="text"
          value={this.state.term}
          onChange={this.handleChange}
          placeholder="Search"
        />
        {closeBtn}
      </form>
    );
  }
}
const mapStateToProp = state => {
  return { term: state.searchTerm };
};

export default withRouter(connect(mapStateToProp)(SearchBar));
