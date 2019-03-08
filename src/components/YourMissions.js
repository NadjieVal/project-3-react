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
        <div className="marginBottom row justify-content-center marginSides">
          {/* <div className="YourMissions"> */}
          <h1>Accomplished Missions</h1>
          <div>
            {missionAccomplished.map(oneMission => {
              return (
                <div
                  key={oneMission._id}
                  className="col-12 d-flex history-card"
                >
                  {/* <div className=""> */}
                  <div className="col-6 padding-left">
                    <img
                      src={oneMission.charityLogo}
                      className="history-logos w-100 remove-padding"
                      alt={oneMission.charityName}
                    />
                  </div>
                  <div className="col-6 line-height remove-padding">
                    <p className="bold-text line-height">
                      {oneMission.missionName}
                    </p>
                    <p className="line-height">{oneMission.charityName}</p>
                  </div>
                  {/* </div>   */}
                </div>
              );
            })}
          </div>
          {/* </div> */}
        </div>
      </section>
    );
  }
}

export default YourMissions;
