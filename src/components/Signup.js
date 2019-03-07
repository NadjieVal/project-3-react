import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import "./Signup.css";
import { postSignUp } from "../api.js";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
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

    postSignUp(this.state).then(response => {
      console.log(response);

      console.log("Sign Up Result", response.data);
      this.props.signupSuccess(response.data);
    });
  }

  render() {
    const { project3User } = this.props;
    // console.log(project3User);
    return (
      <section className="Signup container">
        <div className="row justify-content-center">
          {project3User ? (
            <Redirect to="/" />
          ) : (
            <div className="contain-center">
              <h2>Sign Up</h2>

              <p className="small-text">
                Already have an account?{" "}
                <Link to="/login" className="text-link">
                  Log In
                </Link>
              </p>

              <form onSubmit={event => this.handleSubmit(event)}>
                <label>First Name</label>
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.firstName}
                  name="firstName"
                  type="text"
                />

                <label>Last Name</label>
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.lastName}
                  name="lastName"
                  type="text"
                />

                <label>Email</label>
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.email}
                  name="email"
                  type="email"
                />

                <label>Password</label>
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.originalPassword}
                  name="originalPassword"
                  type="password"
                />

                <div>
                  <button className="primary-btn">Create your account</button>
                </div>
              </form>

              {/* <div>
                <p className="small-text">
                  By creating an account, you agree to our{" "}
                  <Link to="/terms" className="text-link">
                    Terms
                  </Link>
                </p>
              </div> */}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Signup;
