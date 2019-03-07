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
        <div className="marginBottom row justify-content-center">
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
                className="text-center col-lg-4 col-md-6 col-sm-12 mission-cards card-shadow justify-content-center"
              >
                <div className="addMargins d-flex flex-column align-items-center">
                  <img
                    src={oneMission.charityLogo}
                    className="charity-logo"
                    alt={oneMission.charityName}
                  />

                  <h3 className="descriptionSize w-100">
                    {oneMission.missionName}
                  </h3>
                  <p className="bold-text line-height">
                    {oneMission.charityName}
                  </p>
                  <p className="line-height">
                    {moment(oneMission.date).format("YYYY MM DD")} |{" "}
                    {oneMission.missionTime}
                  </p>
                  <p className="descriptionSize w-100">
                    {oneMission.missionIntro}
                  </p>
                  <Link to={missionAddress(oneMission)}>
                    <button className="primary-btn">See Details</button>
                  </Link>
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
