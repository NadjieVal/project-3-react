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
      <section div className="App container">
        <div className="row justify-content-center">
          <div className="container-fluid mission-cards card-shadow justify-content-center">
            <div>
              <div className="d-flex charity-content">
                <div className="col-lg-4">
                  <img
                    src={missionItem.charityLogo}
                    className="charity-logo"
                    alt={missionItem.charityName}
                  />
                </div>

                <div className="charity-content col-lg-8">
                  <div className="charity-content-margin">
                    <h3>{missionItem.missionName}</h3>
                    <p className="bold-text line-height">
                      {missionItem.charityName}
                    </p>
                    <p className="line-height">
                      {moment(missionItem.missionDate).format("YYYY MM DD")} |{" "}
                      {missionItem.missionTime}
                    </p>
                    <p className="line-height">{missionItem.location}</p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <p className="">{missionItem.missionDescription}</p>
                <p className="text-link">{missionItem.email}</p>
                <p className="text-link">{missionItem.charityUrl}</p>
                <div className="mission-card-btn">
                  <span>
                    <Link to="/your-missions">
                      <button
                        className="primary-btn"
                        onClick={event => this.handleSubmit(event)}
                      >
                        Book this mission
                      </button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MissionDetails;
