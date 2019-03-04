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
        <div className="row">
          {/* <div className="col-sm "> */}
          <div className="col-12">
            <h1>Which activity do you want to save time from?</h1>
          </div>
          {/* <div className="list-group "> */}
          <ul className="row">
            {categoryArray.map(oneCategory => {
              return (
                <li
                  className="icon-borders col-lg-4 col-md-4 col-sm-6 col-xs-6"
                  key={oneCategory._id}
                >
                  <h3>{oneCategory.name}</h3>
                  <img
                    className="category-icons"
                    src={oneCategory.icon}
                    alt="icon"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      // </div>
    );
  }
}

export default Categories;
