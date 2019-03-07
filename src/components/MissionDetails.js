import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import "./MissionDetails.css";

import {
  getMissionDetails,
  postMission,
  getTimeList,
  getMissionHistory
} from "../api.js";

import moment from "moment";

class MissionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missionItem: {},
      isMissionCheckout: false,
      timeSaved: [],
      missionsBooked: [],
      duration: null
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    getTimeList().then(response => {
      console.log("Time time time", response.data);
      this.setState({ timeSaved: response.data });
    });

    getMissionHistory().then(response => {
      console.log("mission mission mission", response.data);
      this.setState({ missionsBooked: response.data });
    });

    getMissionDetails(params.charityId).then(response => {
      this.setState({ missionItem: response.data });
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      charityLogo,
      charityName,
      missionName,
      duration
    } = this.state.missionItem;
    const { timeSaved, missionsBooked } = this.state;

    const totalMinutes = timeSaved.reduce(
      (sum, oneInput) => sum + oneInput.time,
      0
    );

    const missionMinutes = missionsBooked.reduce(
      (sum, oneMission) => sum + oneMission.duration,
      0
    );
    const totalTime = totalMinutes - missionMinutes;

    if (totalTime < duration) {
      alert("You need to save more time to book this mission");
      return;
    }

    postMission({ charityLogo, charityName, missionName, duration }).then(
      response => {
        console.log("add mission", response.data);

        this.setState({ isMissionCheckout: true });
      }
    );
  }
  render() {
    const { missionItem, isMissionCheckout } = this.state;

    if (isMissionCheckout) {
      return <Redirect to="/your-missions" />;
    }

    return (
      <section div className="App container">
        <div className="marginBottom row justify-content-center">
          <div
            key={missionItem._id}
            className="text-center col-lg-8 col-md-10 col-sm-12 m-auto  card-shadow justify-content-center"
          >
            <div className="mission-card d-flex flex-column align-items-center">
              <img
                src={missionItem.charityLogo}
                className="charity-logo-2"
                alt={missionItem.charityName}
              />

              <h3 className="">{missionItem.missionName}</h3>
              <p className="bold-text line-height">{missionItem.charityName}</p>
              <p className="line-height">
                {moment(missionItem.date).format("YYYY MM DD")} |{" "}
                {missionItem.missionTime}
              </p>
              <p className="">{missionItem.missionDescription}</p>
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
        </div>
      </section>

      // <section div className="App container">
      //   <div className="marginBottom row justify-content-center">
      //     <div className="container-fluid mission-cards card-shadow justify-content-center">
      //       <div>
      //         <div className="d-flex charity-content">
      //           <div className="col-lg-4">
      //             <img
      //               src={missionItem.charityLogo}
      //               className="charity-logo"
      //               alt={missionItem.charityName}
      //             />
      //           </div>

      //           <div className="charity-content col-lg-8">
      //             <div className="charity-content-margin">
      //               <h3>{missionItem.missionName}</h3>
      //               <p className="bold-text line-height">
      //                 {missionItem.charityName}
      //               </p>
      //               <p className="line-height">
      //                 {moment(missionItem.missionDate).format("YYYY MM DD")} |{" "}
      //                 {missionItem.missionTime}
      //               </p>
      //               <p className="line-height">{missionItem.location}</p>
      //             </div>
      //           </div>
      //         </div>

      //         <div className="col-12">
      //           <p className="">{missionItem.missionDescription}</p>
      //           <p className="text-link">{missionItem.email}</p>
      //           <p className="text-link">{missionItem.charityUrl}</p>
      //           <div className="mission-card-btn">
      //             <span>
      //               <Link to="/your-missions">
      //                 <button
      //                   className="primary-btn"
      //                   onClick={event => this.handleSubmit(event)}
      //                 >
      //                   Book this mission
      //                 </button>
      //               </Link>
      //             </span>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
}

export default MissionDetails;
