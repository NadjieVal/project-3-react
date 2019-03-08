import React, { Component } from "react";
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
      <section div className="App container">
        <div className="marginBottom row justify-content-center">
          <h1 className="col-12">Accomplished Missions</h1>

          {missionAccomplished.map(oneMission => {
            return (
              <div
                key={oneMission._id}
                className="text-center col-lg-4 col-md-6 col-sm-12 justify-content-center"
              >
                <div className="history-card d-flex flex-column align-items-center">
                  <img
                    src={oneMission.charityLogo}
                    className="charity-logo"
                    alt={oneMission.charityName}
                  />
                  <p className="bold-text line-height">
                    {oneMission.missionName}
                  </p>
                  <p className="line-height">{oneMission.charityName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default YourMissions;
