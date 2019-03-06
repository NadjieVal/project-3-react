import React, { Component } from "react";
import Card from "react-bootstrap/Card";

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
      <div className="App container">
        {/* <div className="row  justify-content-center"> */}
        {missionsArray.map(oneMission => {
          return (
            <div
              // className="card"
              // style={{ width: 18 + `rem` }}
              key={oneMission._id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={oneMission.charityLogo} />
                <Card.Body>
                  <Card.Title>{oneMission.charityName}</Card.Title>
                  <b>
                    {oneMission.missionName}
                    <br />
                    {moment(oneMission.date).format("YYYY MM DD")} |{" "}
                    {oneMission.missionTime}
                  </b>
                  <Card.Text>{oneMission.missionIntro}</Card.Text>
                  <a href={missionAddress(oneMission)} className="primary-btn">
                    See Details
                  </a>
                </Card.Body>
              </Card>
              {/* ;
              <div className="new-card">
                <div className="card-back">
                  <img
                    src={oneMission.charityLogo}
                    className="card-img-top charity-logo"
                    alt="charity-logo"
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{oneMission.charityName}</h3>
                  <b>
                    {oneMission.missionName}
                    <br />
                    {moment(oneMission.date).format("YYYY MM DD")} |{" "}
                    {oneMission.missionTime}
                  </b>
                  <p className="card-text">{oneMission.missionIntro}</p> */}
              {/* <a href="#" className="btn btn-primary"> */}
              {/* <a href={missionAddress(oneMission)} className="primary-btn">
                    See Details
                  </a> */}
              {/* <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                  >
                    See Details
                  </button> */}
              {/* </div>
              </div> */}
            </div>
          );
        })}
        {/* </div> */}
      </div>
    );
  }
}

export default Charities;
