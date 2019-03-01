import React, { Component } from "react";

import "./Categories.css";

import { getCategoryList } from "../api.js";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryArray: []
    };
  }

  componentDidMount() {
    getCategoryList().then(response => {
      console.log("CATEGORIES", response.data);
      this.setState({ categoryArray: response.data });
    });
  }

  render() {
    const { categoryArray } = this.state;
    return (
      <div className="App container">
        <div class="row">
          {/* <div className="col-sm "> */}
          <h1>Which activity do you want to save time from?</h1>
          {/* <div className="list-group "> */}
          {categoryArray.map(oneCategory => {
            return (
              <div className="icon-borders col-6" key={oneCategory._id}>
                <h3>{oneCategory.name}</h3>
                <img
                  className="category-icons"
                  src={oneCategory.icon}
                  alt="icon"
                />
              </div>
            );
          })}
        </div>
      </div>
      // </div>
    );
  }
}

export default Categories;
