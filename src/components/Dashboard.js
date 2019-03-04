import React, { Component } from "react";

import "./Dashboard.css";
import Chart from "./Chart.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TimeSaved: "",
      currentDate: "",
      logo: ""
    };
  }
  render() {
    const timeSaved = [
      { time: 8, createdAt: "2019-03-03T23:00:00.000Z" },
      { time: 30, createdAt: "2019-03-03T23:00:00.000Z" },
      { time: 15, createdAt: "2019-03-04T23:00:00.000Z" },
      { time: 25, createdAt: "2019-03-05T23:00:00.000Z" },
      { time: 5, createdAt: "2019-03-05T23:00:00.000Z" }
    ];
    return (
      <section>
        {/* <div>
          <h3>1h35</h3>
          <p>Available Time</p> */}
        {/* <p>{this.state.TimeSaved}</p> */}

        <Chart timeSaved={timeSaved} />
        {/* </div>


        <div>
          <button>Add Time</button>
          <button>Spend Time</button>
        </div>
        <div>
          <h5>Recently Added</h5>
        </div>
        <div>
          <ul>
            <li>LOGO + ACTIVITY + TIME SAVED</li>
          </ul>
        </div> */}
      </section>
    );
  }
}

export default Dashboard;
