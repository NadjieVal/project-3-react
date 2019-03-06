import React, { Component } from "react";
import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Form";
// import Col from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postCategory } from "../api.js";
import { Redirect } from "react-router-dom";

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
        <h3 className="h3-add-category">Create custom category</h3>

        <div className="container">
          <img
            src="/images/default_icon.png"
            alt="clock_icon"
            className="custom"
          />

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
        </Button>
      </section>
    );
  }
}

export default AddCategory;
