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
      <div className="media">
        <img
          src={missionItem.charityLogo}
          className="align-self-start mr-3 logo-details"
          alt="charity-logo"
        />
        <div className="media-body">
          <h3 className="mt-0">{missionItem.charityName}</h3>
          <b>
            {missionItem.missionName}
            <br />
            {moment(missionItem.date).format("YYYY MM DD")} |{" "}
            {missionItem.missionTime}
            <br />
            {missionItem.location}
          </b>
          <p>{missionItem.missionDescription}</p>
          <p>{missionItem.charityUrl}</p>
          <p>{missionItem.email}</p>
        </div>
        <Link to="/your-missions">
          <button className="primary-btn">Book this mission</button>
        </Link>
      </div>
    );
  }
}

export default MissionDetails;
