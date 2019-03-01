import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import NotFound from "./components/NotFound.js";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { getLogOut } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    let userInfo = localStorage.getItem("project3User");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
    }

    this.state = {
      currentUser: userInfo
    };
  }

  updateUser(newUser) {
    if (newUser) {
      localStorage.setItem("project3User", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("project3User");
    }
    this.setState({ currentUser: newUser });
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
        <header>
          <nav>
            {this.state.currentUser ? (
              <span>
                <NavLink exact to="/">
                  Dashboard
                </NavLink>
                <NavLink to="/activity">Activity</NavLink>
                <NavLink to="/charity">Charity</NavLink>
                <NavLink to="/history">History</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <span>
                  <b>{this.state.currentUser.email}</b>
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
        </header>

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route
            path="/signup"
            render={() => {
              return (
                <Signup
                  currentUser={this.state.currentUser}
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
                  currentUser={this.state.currentUser}
                  loginSuccess={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route path="/categories" component={Categories} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
