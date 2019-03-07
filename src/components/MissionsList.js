import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <div className="row justify-content-center">
          <h1>Available Missions</h1>
          <div className="container-fluid mission-cards justify-content-center">
            <div className="d-flex charity-content">
              <div className="col-lg-4">
                <img
                  src="/images/Amnesty_International_logo.png"
                  className="charity-logo"
                  alt="{oneMission.charityName}"
                />
              </div>

              <div className="charity-content col-lg-8">
                <div className="charity-content-margin">
                  <h3>Mission Name</h3>
                  <p className="bold-text line-height">Charity Name</p>
                  <p className="line-height">Date | Time</p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <p className="">
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Donec mattis, nibh interdum imperdiet molestie, magna sem
                vestibulum ante, nec volutpat justo leo a ipsum. Suspendisse
                tincidunt laoreet ex, ut accumsan augue pulvinar nec.
              </p>
              <div className="mission-card-btn">
                <span>
                  <Link to="{missionAddress}">
                    <button className="primary-btn">See Details</button>
                  </Link>
                </span>
              </div>
            </div>
          </div>

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
