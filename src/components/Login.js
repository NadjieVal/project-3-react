import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./Login.css";
import { postLogIn } from "../api";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      originalPassword: ""
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    postLogIn(this.state).then(response => {
      console.log("Log In", response.data);
      this.props.loginSuccess(response.data);
    });
  }

  render() {
    return this.props.project3User ? (
      <Redirect to="/" />
    ) : (
      <section className="Login">
        <h2>Log In</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Email:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.email}
              name="email"
              type="email"
              placeholder="john.doe@example.com"
            />
          </label>

          <label>
            Password:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.originalPassword}
              name="originalPassword"
              type="password"
              placeholder="secret secret"
            />
          </label>
          <button>Log In</button>
        </form>
      </section>
    );
  }
}

export default Login;
