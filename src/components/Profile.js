import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import { getLogOut } from "./api.js";
// import Profile from "./components/Profile.js";

import "./Profile.css";

class Profile extends Component {
  // constructor(props) {
  //   super(props);
  //   let userInfo = localStorage.getItem("project3User");
  //   if (userInfo) {
  //     userInfo = JSON.parse(userInfo);
  //   }

  //   this.state = {
  //     project3User: userInfo,
  //     submitted: false
  //   };
  // }

  // updateUser(newUser) {
  //   if (newUser) {
  //     localStorage.setItem("project3User", JSON.stringify(newUser));
  //   } else {
  //     localStorage.removeItem("project3User");
  //   }
  //   this.setState({ project3User: newUser });
  // }

  // logoutClick() {
  //   getLogOut().then(response => {
  //     console.log("Log Out", response.data);
  //     this.setState({ submitted: true });
  //     this.updateUser(null);
  //   });
  // }

  render() {
    const { project3User } = this.props;

    return (
      <section className="Profile container">
        <div className="row justify-content-center">
          <h1>Profile</h1>
          <p>avatar</p>
          <p>
            {project3User.firstName} {project3User.lastName}
          </p>
          <p>{project3User.email}</p>
        </div>

        {/* <span>
          <NavLink to="/logout" onClick={() => this.logoutClick()}>
            Log Out
          </NavLink>
        </span> */}
      </section>
    );
  }
}

export default Profile;
