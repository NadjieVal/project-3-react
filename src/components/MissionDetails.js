import React, { Component } from "react";

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
      console.log("mission details", response.data);
      this.setState({ missionItem: response.data });
    });
  }
  render() {
    const { missionItem } = this.state;
    return (
      <div className="media">
        <img src="..." class="align-self-start mr-3" alt="..." />
        <div className="media-body">
          <h3 className="mt-0">{missionItem.charityName}</h3>
          <b>
            {missionItem.missionName}
            <br />
            {moment(missionItem.date).format("YYYY MM DD")} | {missionItem.time}
            <br />
            {missionItem.location}
          </b>
          <p>{missionItem.missionDescription}</p>
        </div>
      </div>
    );
  }
}

export default MissionDetails;
