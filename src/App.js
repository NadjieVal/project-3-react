import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import NotFound from "./components/NotFound.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import { getLogOut } from "./api";
import Categories from "./components/Categories.js";
import Charities from "./components/MissionsList";
import MissionDetails from "./components/MissionDetails";

class App extends Component {
  constructor(props) {
    super(props);
    let userInfo = localStorage.getItem("project3User");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
    }

    this.state = {
      project3User: userInfo
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
      this.updateUser(null);
    });
  }

  render() {
    return (
      <div className="App">
        <header />

        <Switch>
          <Route exact path="/" component={Dashboard} />
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
                <NavLink exact to="/">
                  Dashboard
                </NavLink>
                <NavLink to="/charity">Charity</NavLink>
                <NavLink to="/history">History</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <span>
                  <button onClick={() => this.logoutClick()}>Log Out</button>
                </span>
              </span>
            ) : (
              <span>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/login">Log In</NavLink>
              </span>
            )}
          </nav>
        </footer>
      </div>
    );
  }
}

export default App;
