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
import Home from "./components/Home";

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
        <header>
          <nav>
            {this.state.project3User ? (
              <span>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/charities">Missions</NavLink>
                <NavLink to="/history">History</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <span>
                  <button onClick={() => this.logoutClick()}>Log Out</button>
                </span>
              </span>
            ) : (
              <span />
            )}
          </nav>
        </header>

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
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/categories" component={Categories} />
          <Route path="/charities" component={Charities} />
          <Route
            path="/charities-details/:charityId"
            component={MissionDetails}
          />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
