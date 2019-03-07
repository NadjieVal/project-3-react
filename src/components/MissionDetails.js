import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./MissionDetails.css";

import { getMissionDetails } from "../api.js";

import moment from "moment";

class MissionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missionItem: {}
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    getMissionDetails(params.charityId).then(response => {
      this.setState({ missionItem: response.data });
    });
  }
  render() {
    const { missionItem } = this.state;
    return (
      <section className="MissionDetails container">
        <div className="row justify-content-center">
          <div className="container-fluid mission-cards justify-content-center">
            <div className="d-flex justify-content-center">
              <div>
                <img
                  src={missionItem.charityLogo}
                  className="charity-logo"
                  alt={missionItem.charityName}
                />{" "}
              </div>

              <div>
                <h4 className="mt-0">{missionItem.missionName}</h4>
                <p>{missionItem.charityName}</p>
              </div>
            </div>
            <div className="media-body">
              <p className="bold-text">
                {moment(missionItem.missionDate).format("YYYY MM DD")} |{" "}
                {missionItem.missionTime}
              </p>
              <p>
                <b>{missionItem.location}</b>
              </p>
              <p className="description">{missionItem.missionDescription}</p>
              <p className="text-link">{missionItem.charityUrl}</p>
              <p>{missionItem.email}</p>
            </div>
            <Link to="/your-missions">
              <button className="primary-btn">Book this mission</button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default MissionDetails;
