import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <Redirect to="/dashboard" />
    ) : (
      <section className="Login container">
        <div className="row justify-content-center">
          <div className="form-contain">
            <h2>Log In</h2>
            <p className="small-text">
              Don't have an account yet?{" "}
              <Link to="/signup" className="text-link">
                Sign Up
              </Link>
            </p>

            <form onSubmit={event => this.handleSubmit(event)}>
              <label>Email:</label>
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.email}
                name="email"
                type="email"
                placeholder="email@example.com"
              />

              <label>Password:</label>
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.originalPassword}
                name="originalPassword"
                type="password"
                placeholder="p@55w0rd"
              />

              <div>
                <button className="primary-btn">Log In</button>
              </div>
              <div>
                <p className="small-text">
                  Forgot your{" "}
                  <Link to="/terms" className="text-link">
                    Password?
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
