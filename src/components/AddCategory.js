import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import Col from "react-bootstrap/Form";

import "./AddCategory.css";

class AddCategory extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    return (
      <section>
        <h3 className="h3-add-category">Create custom category</h3>
        <div className="container">
          <Form.Group as={Row} controlId="formPlaintextCustom" className="dark">
            <Form.Label col-xs="2">
              <img
                src="/images/default_icon.png"
                alt="clock_icon"
                className="custom"
              />
            </Form.Label>
            <Col xs="8">
              <Form.Control
                type="custom"
                placeholder="Enter category title here"
              />
            </Col>
          </Form.Group>
          {/* <img
            src="/images/default_icon.png"
            alt="clock-icon"
            className="custom col-sm-4"
          />
          <Form.Control
            className="col-sm-8"
            name="inputTime"
            type="text"
            placeholder="Enter category title here"
          /> */}
        </div>
      </section>
    );
  }
}

export default AddCategory;
