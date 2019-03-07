import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./MissionsList.css";
import SearchBar from "../components/SearchBar.js";

import { getMissionsList } from "../api.js";

import moment from "moment";

function missionAddress(charity) {
  return `/charities/${charity._id}`;
}

class Charities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missionsArray: [],
      searchTarget: ""
    };
  }

  componentDidMount() {
    getMissionsList().then(response => {
      this.setState({ missionsArray: response.data });
    });
  }

  searchSubmit(userText) {
    this.setState({
      searchTarget: userText
    });
  }

  render() {
    const { missionsArray } = this.state;
    return (
      <section div className="App container">
        <div className="row justify-content-center">
          <h1>Available Missions</h1>

          <SearchBar
            searchSubmit={userText => this.searchSubmit(userText)}
            searchString={this.state.searchTarget}
            // searchFilter={this.state.searchTarget}
          />

          {missionsArray.map(oneMission => {
            // if (
            //   missionsArray.charityName.indexOf(this.props.searchFilter) > -1
            // ) {
            return (
              <div
                key={oneMission._id}
                className="container-fluid mission-cards card-shadow justify-content-center"
              >
                <div>
                  <div className="d-flex charity-content">
                    <div className="col-lg-4">
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
            // }
          })}
        </div>
      </section>
    );
  }
}

export default Charities;
