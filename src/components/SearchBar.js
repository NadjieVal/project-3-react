import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchString: "" };
  }

  genericOnChange(event) {
    const { value, name } = event.target;
    console.log("generic on change in search bar ", value);
    this.props.searchSubmit(value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section className="SearchBar container">
        <form className="d-flex search-margin">
          <input
            className="search-input"
            onChange={event => this.genericOnChange(event)}
            value={this.props.searchString}
            type="text"
            name="searchString"
            placeholder="Search for available missions"
          />

          <button className="search-btn">Search</button>
        </form>
      </section>
    );
  }
}

export default SearchBar;
