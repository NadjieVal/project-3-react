import React, { Component } from "react";

import "./Categories.css";

import allCategories from "./categories.json";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryArray: allCategories
    };
  }

  render() {
    const { categoryArray } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Which activity do you want to save time from?</h1>
        </header>

        <div className="container">
          <div className="row">
            <div
              className="col-6"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <div className="list-group">
                {categoryArray.map(oneCategory => {
                  return (
                    <div key={oneCategory._id}>
                      <h3>
                        {oneCategory.name}
                        {oneCategory.icon}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
