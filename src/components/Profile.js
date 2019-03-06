import React, { Component } from "react";

import "./Profile.css";

//import { getUserProfile } from "../api.js";

class Profile extends Component {
  render() {
    const { project3User } = this.props;
    //const { currentUser } = this.props;
    // console.log(project3User, "current state ");

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
      </section>
    );
  }
}

export default Profile;
