import React, { Component } from "react";

import "./Profile.css";

// import { getUserProfile } from "../api.js";

class Profile extends Component {
  render() {
    // const { project3User } = this.state;
    const { currentUser } = this.props;
    // console.log(project3User, "current state ");

    return (
      <section className="Profile container">
        <div className="row">
          <h1>Profile</h1>
          <p>avatar</p>
          <p>
            {currentUser.firstName} {currentUser.lastName}
          </p>
          <p>{currentUser.email}</p>
        </div>
      </section>
    );
  }
}

export default Profile;
