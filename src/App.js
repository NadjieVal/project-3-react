import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import NotFound from "./components/NotFound.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Categories from "./components/Categories.js";
import Charities from "./components/MissionsList.js";
import MissionDetails from "./components/MissionDetails.js";
import YourMissions from "./components/YourMissions";
import AddCategory from "./components/AddCategory";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";
import { getLogOut } from "./api.js";

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
          <Route path="/charities/:charityId" component={MissionDetails} />
          <Route path="/charities" component={Charities} />
          <Route
            path="/profile/:userId"
            render={() => {
              return <Profile currentUser={this.state.project3User} />;
            }}
          />
          {/* <Route
            path="/profile"
            render={() => {
              return <Profile project3User={this.state.project3User} />;
            }}
          /> */}
          <Route path="/your-missions" component={YourMissions} />
          <Route path="/add-category" component={AddCategory} />

          <Route component={NotFound} />
        </Switch>
        <footer>
          <nav className="container-fluid">
            {this.state.project3User ? (
              <span>
                <NavLink to="/dashboard">
                  <img
                    src="/images/dashboard_icon.png"
                    alt="dashboard-logo"
                    className="icon"
                  />
                </NavLink>
                <NavLink to="/charities">Missions</NavLink>
                <NavLink to="/your-missions">
                  <img
                    src="/images/history_icon.png"
                    alt="history-logo"
                    className="icon"
                  />
                </NavLink>
                <NavLink to="/profile">
                  <img
                    src="/images/profile_icon.png"
                    alt="profile-logo"
                    className="icon"
                  />
                </NavLink>
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

export default App;
