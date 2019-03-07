import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <section className="Home container">
        <div className="row justify-content-center">
          <div className="contain-center">
            <div className="branding">
              <img
                src="./images/timefor_logo.png"
                className="logo"
                alt="TimeFor"
              />
              <h2>TimeFor</h2>
            </div>
            <div className="auth-entry">
              <Link to="/login">
                <button className="primary-btn">Log In</button>
              </Link>

              <Link to="/signup">
                <button className="primary-btn">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
