import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SignupPage.css";
import { postSignUp } from "../api.js";

class SignupPage extends Component {
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
      console.log("Sign Up Result", response.data);
      this.props.signupSuccess(response.data);
    });
  }

  render() {
    const { currentUser } = this.props;
    console.log(currentUser);
    return (
      <section className="SignupPage">
        {currentUser ? (
          <div>
            <h2>You are already signed up!</h2>
            <p>
              Welcome, {currentUser.firstName}! Your user ID is{" "}
              <b>{currentUser._id}</b>.
            </p>
          </div>
        ) : (
          <div>
            <h2>Sign Up</h2>

            <form>
              <label>
                First Name:
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.firstName}
                  name="firstName"
                  type="text"
                  placeholder=""
                />
              </label>
              <label>
                Last Name:
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.lastName}
                  name="lastName"
                  type="text"
                  placeholder=""
                />
              </label>
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
              <button>Create your account</button>
            </form>
            <div>
              <h6>
                Already have an account? <Link to="/login-page">Log In</Link>
              </h6>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default SignupPage;
