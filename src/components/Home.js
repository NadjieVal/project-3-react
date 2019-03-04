import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <section className="Home container">
        <div className="row justify-content-center">
          <div className="form-contain">
            <div className="branding">
              <p>[logo]</p>
              <h2>TimeFor</h2>
            </div>

            <Link to="/login">
              <button className="primary-btn">Log In</button>
            </Link>

            <Link to="/signup">
              <button className="primary-btn">Sign Up</button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
