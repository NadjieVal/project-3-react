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
              // style={{ width: 18 + `rem` }}
              key={oneMission._id}
            >
              <div className="new-card">
                <img
                  src={oneMission.charityLogo}
                  className="card-img-top charity-logo"
                  alt="charity-logo"
                />
                <div className="card-body">
                  <h3 className="card-title">{oneMission.charityName}</h3>
                  <b>
                    {oneMission.missionName}
                    <br />
                    {oneMission.date} | {oneMission.time}
                  </b>
                  <p className="card-text">{oneMission.missionIntro}</p>
                  <a href="#" className="btn btn-primary">
                    See Details
                  </a>
                  {/* <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                  >
                    See Details
                  </button> */}
                </div>
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
