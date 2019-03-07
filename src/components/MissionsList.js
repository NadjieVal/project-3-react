import React, { Component } from "react";

import "./MissionsList.css";

import { getMissionsList } from "../api.js";

import moment from "moment";

function missionAddress(charity) {
  return `/charities/${charity._id}`;
}

class Charities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missionsArray: []
    };
  }

  componentDidMount() {
    getMissionsList().then(response => {
      this.setState({ missionsArray: response.data });
    });
  }

  render() {
    const { missionsArray } = this.state;
    return (
      <section div className="App container">
        <div className="row  justify-content-center">
          {missionsArray.map(oneMission => {
            return (
              <div
                className="card"
                // style={{ width: 18 + `rem` }}
                key={oneMission._id}
              >
                <div className="d-flex new-card">
                  <div>
                    <img
                      src={oneMission.charityLogo}
                      className="charity-logo"
                      alt="charity-logo"
                    />
                  </div>
                  <div className="mission-name">
                    <h3 className="card-title">{oneMission.missionName}</h3>
                    <p>{oneMission.charityName}</p>
                    <p>
                      {moment(oneMission.date).format("YYYY MM DD")} |{" "}
                      {oneMission.missionTime}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="card-text description">
                    {oneMission.missionIntro}
                  </p>
                  {/* <a href="#" className="btn btn-primary"> */}
                  <a
                    href={missionAddress(oneMission)}
                    className="btn btn-primary"
                  >
                    See Details
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Charities;
