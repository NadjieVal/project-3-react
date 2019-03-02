import React, { Component } from "react";

import "./MissionsList.css";

import { getMissionsList } from "../api.js";

class Charities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missionsArray: []
    };
  }

  componentDidMount() {
    getMissionsList().then(response => {
      console.log("MISSIONS", response.data);
      this.setState({ missionsArray: response.data });
    });
  }

  render() {
    const { missionsArray } = this.state;
    return (
      <div className="App container">
        {missionsArray.map(oneMission => {
          return (
            <div
              className="card"
              style={{ width: 8 + `rem;` }}
              key={oneMission._id}
            >
              <img
                src={oneMission.charityLogo}
                className="card-img-top"
                alt="charity-logo"
              />
              <div className="card-body">
                <h3 className="card-title">{oneMission.charityName}</h3>
                <h4>{oneMission.missionName}</h4>
                <p className="card-text">{oneMission.missionIntro}</p>
                <a href="#" className="btn btn-primary">
                  See Details
                </a>
              </div>
            </div>
          );
        })}
      </div>

      // </div>
    );
  }
}

export default Charities;
