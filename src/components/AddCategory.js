import React, { Component } from "react";
import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Form";
// import Col from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postCategory } from "../api.js";
import { Redirect, Link } from "react-router-dom";

import "./AddCategory.css";

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { category: "", isSubmitSuccessful: false };
  }

  addCategory(event) {
    console.log(event);
    console.log("clicked add categories");

    postCategory(this.state).then(response => {
      console.log("add category", response.data);

      this.setState({ isSubmitSuccessful: true });
    });
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state);

    return this.state.isSubmitSuccessful ? (
      <Redirect to="/categories" />
    ) : (
      <section>
        <div className="container">
          <h3 className="h3-add-category text-center">
            Create custom category
          </h3>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 m-auto text-center">
              <img
                src="/images/default_icon.png"
                alt="clock_icon"
                className="custom mr-0"
              />
              <div className="form-group w-100 ">
                <input
                  type="custom"
                  className="form-control input-style w-100 text-center bottom-blue"
                  id="exampleInputCategory"
                  placeholder="Enter category title here"
                  name="category"
                  onChange={event => this.genericOnChange(event)}
                />
              </div>
              <button
                onClick={event => this.addCategory(event)}
                className="primary-btn"
              >
                Save new category
              </button>
              <div>
                <Link to="/categories">Go back</Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
          <Form.Control
            className="input-style"
            type="custom"
            placeholder="Enter category title here"
            name="category"
            onChange={event => this.genericOnChange(event)}
          />
        </div>
        <Button onClick={event => this.addCategory(event)}>
          Save new category
        </Button> */}
      </section>
    );
  }
}

export default AddCategory;
