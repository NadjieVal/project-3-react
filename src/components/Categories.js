import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./Categories.css";

import { getCategoryList } from "../api.js";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      categoryArray: [],
      show: false
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

  render() {
    const { categoryArray } = this.state;
    return (
      <section className="App ">
        <div className="container">
          <div className="col-12">
            <h1>Which activity do you want to save time from?</h1>
          </div>

          <ul className="row">
            {categoryArray.map(oneCategory => {
              return (
                <Button
                  variant="dark"
                  onClick={this.handleShow}
                  className="item-btn icon-borders col-lg-4 col-md-4 col-sm-4 col-xs-4"
                  key={oneCategory._id}
                >
                  <img
                    src={oneCategory.icon}
                    className="img-fluid item-logo"
                    alt="foo"
                  />
                  <p className="px-2">{oneCategory.name}</p>
                </Button>
              );
            })}
          </ul>
        </div>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Link to="/add-category">Add new category</Link>
      </section>
    );
  }
}

export default Categories;
