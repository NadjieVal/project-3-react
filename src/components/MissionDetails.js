import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import "./MissionDetails.css";

import { getMissionDetails, postMission } from "../api.js";

import moment from "moment";

class MissionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missionItem: {},
      missionAccomplished: false,
      isMissionCheckout: false,
      duration: null
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    getMissionDetails(params.charityId).then(response => {
      this.setState({ missionItem: response.data });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target, "aaaa");

    postMission(this.state).then(response => {
      console.log("add mission", response.data);

      this.setState({ isMissionCheckout: true });
    });
  }
  render() {
    const { missionItem, missionAccomplished } = this.state;

    if (missionAccomplished) {
      return <Redirect to="/your-missions" />;
    }

    return (
      <section className="MissionDetails container">
        <div className="row justify-content-center">
          <div className="general-layout">
            <div className="d-flex justify-content-center">
              <div>
                <img src="..." className="align-self-start mr-3" alt="..." />
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
              <button
                className="primary-btn"
                onClick={event => this.handleSubmit(event)}
              >
                Book this mission
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default MissionDetails;
