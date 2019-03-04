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

            <button className="primary-btn">
              <Link to="/login">Log In</Link>
            </button>

            <button className="primary-btn">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
