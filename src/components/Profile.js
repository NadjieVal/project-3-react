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

        <div className="row justify-content-center">
          <div className="justify-content-center contain-center">
            <h1>Profile</h1>
            <div>
              <p>avatar</p>
              <h3>
                {project3User.firstName} {project3User.lastName}
              </h3>
              <p className="line-height">{project3User.email}</p>
            </div>
            <span>
              <NavLink to="/logout" onClick={() => this.logoutClick()}>
                <button className="primary-btn">Log Out</button>
              </NavLink>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
