import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { getLogOut } from "../api.js";

import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false
    };
  }

  logoutClick() {
    getLogOut().then(response => {
      console.log("Log Out", response.data);
      this.setState({ submitted: true });
      this.props.logoutSuccess(null);
    });
  }

  render() {
    const { project3User } = this.props;

    if (this.state.submitted) {
      return <Redirect to="/" />;
    }

    return (
      <section className="Profile container">
        <h1 className="h1-profile">Profile </h1>
        <div className="marginBottom row justify-content-center marginSides">
          <div className="h-auto col-lg-6 col-md-8 col-sm-10 m-auto addMargins d-flex flex-column align-items-center">
            <p>
              <img
                className="avatar remove-padding"
                src="/images/avatar_icon.svg"
                alt="avatar_icon"
              />
            </p>
            <h3>
              {project3User.firstName} {project3User.lastName}
            </h3>
            <p className="line-height size">{project3User.email}</p>

            <button className="primary-btn" onClick={() => this.logoutClick()}>
              Log Out
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
