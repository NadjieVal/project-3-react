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
      <section>
        <div className="YourMissions">
          <h3>The Missions you've accomplished!</h3>
          <div>
            {missionAccomplished.map(oneMission => {
              return (
                <div key={oneMission._id}>
                  <div className="container">
                    <div className="row">
                      <div className="col-8">
                        <img src={oneMission.charityLogo} alt="charityLogo" />
                        <div className="col-4">
                          <p>{oneMission.charityName}</p>
                          <p>{oneMission.missionName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default YourMissions;
