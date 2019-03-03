import React, { Component } from "react";

import "./MissionDetails.css";

import { getMissionDetails } from "../api.js";

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
      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLongTitle">
                {missionItem.charityName}
              </h3>
              <b>
                {missionItem.missionName}
                <br />
                {missionItem.date} | {missionItem.time}
                <br />
                {missionItem.location}
              </b>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{missionItem.missionDescription}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MissionDetails;
