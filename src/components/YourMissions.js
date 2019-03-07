import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Tab from "react-bootstrap/Tab";

import "./YourMissions.css";
import { getMissionHistory } from "../api";

class YourMissions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charityLogo: "",
      missionName: "",
      charityName: "",
      missionAccomplished: []
    };
  }

  componentDidMount() {
    getMissionHistory().then(response => {
      console.log("mission mission mission", response.data);
      this.setState({ missionAccomplished: response.data });
    });
  }
  render() {
    const { missionAccomplished } = this.state;
    return (
      <section>
        <div className="YourMissions">
          <h3>The Missions you've accomplished!</h3>
          <div>
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-8">
                    <img src={this.state.charityLogo} alt="charityLogo" />
                    <div className="col-4">
                      <p>{this.state.charityName}</p>
                      <p>{this.state.missionName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default YourMissions;
