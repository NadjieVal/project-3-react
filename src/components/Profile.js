import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import Home from "../components/Home.js";
import { getLogOut } from "../api.js";

import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    let userInfo = localStorage.getItem("project3User");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
    }

    this.state = {
      project3User: userInfo,
      submitted: false
    };
  }

  updateUser(newUser) {
    if (newUser) {
      localStorage.setItem("project3User", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("project3User");
    }
    this.setState({ project3User: newUser });
  }

  logoutClick() {
    getLogOut().then(response => {
      console.log("Log Out", response.data);
      this.setState({ submitted: true });
      this.updateUser(null);
    });
  }

  render() {
    const { project3User } = this.props;

    return (
      <section className="Profile container">
        <Switch>
          <Route
            path="/logout"
            render={() => {
              return (
                <Home
                  project3User={this.state.project3User}
                  logoutSuccess={newUser => this.updateUser(newUser)}
                />
              );
            }}
          />
        </Switch>

        <div className="marginBottom row justify-content-center marginSides">
          <div className="h-auto col-lg-6 col-md-8 col-sm-10 m-auto addMargins d-flex flex-column align-items-center">
            <h1>Profile</h1>
            <p>avatar</p>
            <h3>
              {project3User.firstName} {project3User.lastName}
            </h3>
            <p className="line-height">{project3User.email}</p>

            <NavLink to="/logout" onClick={() => this.logoutClick()}>
              <button className="primary-btn">Log Out</button>
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
