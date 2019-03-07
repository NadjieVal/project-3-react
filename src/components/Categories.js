import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link, Redirect } from "react-router-dom";
import "./Categories.css";

import { getCategoryList, postTime } from "../api.js";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      categoryArray: [],
      show: false,
      timeSaved: null,
      inputTime: "",
      categoryId: null
    };
  }

  componentDidMount() {
    getCategoryList().then(response => {
      console.log("CATEGORIES", response.data);
      this.setState({ categoryArray: response.data });
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    const timeSaved = this.state.timeSaved;

    postTime(this.state).then(response => {
      console.log("add time", response.data);

      //timeSaved.push(this.state.inputTime);
      this.setState({ timeSaved: response.data });
    });

    console.log(timeSaved);
  }

  render() {
    const { categoryArray, timeSaved } = this.state;
    console.log(categoryArray);
    console.log(this.state);

    if (timeSaved) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <section className="App container text-center">
        <h1>From which activity do you want to save time?</h1>
        {/* <div className="col-12" /> */}

        <ul className="row justify-content-center w-100">
          {categoryArray.map(oneCategory => {
            return (
              <li className="col-lg-4 col-md-6 col-sm-12 w-100">
                <Button
                  variant="secondary"
                  onClick={this.handleShow}
                  className="item-btn icon-borders w-100"
                  key={oneCategory._id}
                >
                  <img
                    src={oneCategory.icon}
                    className="img-fluid item-logo"
                    alt="foo"
                  />
                  <p className="px-2">{oneCategory.name}</p>
                </Button>
              </li>
            );
          })}
        </ul>
        <Modal
          show={this.state.show}
          onHide={event => this.handleClose(event)}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>How much time to you want to save?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Control
              name="inputTime"
              value={this.state.inputTime}
              type="text"
              placeholder="Enter time in minutes"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={event => this.handleSubmit(event)}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

        <Link to="/add-category">Add new category</Link>
      </section>
    );
  }
}

export default Categories;
