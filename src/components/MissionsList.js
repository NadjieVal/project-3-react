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

          {missionsArray.map(oneMission => {
            return (
              <div className="container-fluid mission-cards justify-content-center">
                <div>
                  <div className="d-flex charity-content">
                    <div key={oneMission._id} className="col-lg-4">
                      <img
                        src={oneMission.charityLogo}
                        className="charity-logo"
                        alt={oneMission.charityName}
                      />
                    </div>

                    <div className="charity-content col-lg-8">
                      <div className="charity-content-margin">
                        <h3>{oneMission.missionName}</h3>
                        <p className="bold-text line-height">
                          {oneMission.charityName}
                        </p>
                        <p className="line-height">
                          {moment(oneMission.date).format("YYYY MM DD")} |{" "}
                          {oneMission.missionTime}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <p className="">{oneMission.missionIntro}</p>
                    <div className="mission-card-btn">
                      <span>
                        <Link to={missionAddress(oneMission)}>
                          <button className="primary-btn">See Details</button>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      // {missionsArray.map(oneMission => {
      //   return (
      //     <div
      //       className="card"
      //       // style={{ width: 18 + `rem` }}
      //       key={oneMission._id}
      //     >
      //       <div className="d-flex new-card">
      //         <div>
      //           <img
      //             src={oneMission.charityLogo}
      //             className="charity-logo"
      //             alt="charity-logo"
      //           />
      //         </div>
      //         <div className="mission-name">
      //           <h3 className="card-title">{oneMission.missionName}</h3>
      //           <p>{oneMission.charityName}</p>
      //           <p>
      //             {moment(oneMission.date).format("YYYY MM DD")} |{" "}
      //             {oneMission.missionTime}
      //           </p>
      //         </div>
      //       </div>
      //       <div>
      //         <p className="card-text description">
      //           {oneMission.missionIntro}
      //         </p>
      //         {/* <a href="#" className="btn btn-primary"> */}
      //         <a
      //           href={missionAddress(oneMission)}
      //           className="btn btn-primary"
      //         >
      //           See Details
      //         </a>
      //       </div>
      //     </div>
      //   );
      // })}
    );
  }
}

export default Charities;
