import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router";
import { Switch, Route, NavLink } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import NotFound from "./components/NotFound.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import { getLogOut } from "./api";
import Categories from "./components/Categories.js";
import Charities from "./components/MissionsList";
import MissionDetails from "./components/MissionDetails";
import Home from "./components/Home";

class App extends Component {
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
    console.log(this.state);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/signup"
            render={() => {
              return (
                <Signup
                  project3User={this.state.project3User}
                  signupSuccess={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route
            path="/login"
            render={() => {
              return (
                <Login
                  project3User={this.state.project3User}
                  loginSuccess={user => this.updateUser(user)}
                />
              );
            }}
          />
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

          <Route path="/dashboard" component={Dashboard} />
          <Route path="/categories" component={Categories} />
          <Route path="/charities" component={Charities} />
          <Route
            path="/charities-details/:charityId"
            component={MissionDetails}
          />

          <Route component={NotFound} />
        </Switch>
        <footer>
          <nav>
            {this.state.project3User ? (
              <span>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/charities">Missions</NavLink>
                <NavLink to="/history">History</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <span>
                  <NavLink to="/logout" onClick={() => this.logoutClick()}>
                    Log Out
                  </NavLink>
                </span>
              </span>
            ) : (
              <span />
            )}
          </nav>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
