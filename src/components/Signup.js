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
      <section className="Signup">
        {project3User ? (
          <Redirect to="/" />
        ) : (
          <div>
            <h2>Sign Up</h2>

            <form onSubmit={event => this.handleSubmit(event)}>
              <label>
                First Name:
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.firstName}
                  name="firstName"
                  type="text"
                />
              </label>
              <label>
                Last Name:
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.lastName}
                  name="lastName"
                  type="text"
                />
              </label>
              <label>
                Email:
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.email}
                  name="email"
                  type="email"
                />
              </label>
              <label>
                Password:
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.originalPassword}
                  name="originalPassword"
                  type="password"
                />
              </label>

              <button>Create your account</button>
            </form>

            <div>
              <p>
                By creating an account, you agree to our{" "}
                <Link to="/term">Terms</Link>
              </p>
              <h6>
                Already have an account? <Link to="/login">Log In</Link>
              </h6>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Signup;
