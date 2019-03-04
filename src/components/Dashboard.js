import React, { Component } from "react";

import "./Dashboard.css";

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
    return (
      <section>
        <div>
          <h3>1h35</h3>
          <p>Available Time</p>
          {/* <p>{this.state.TimeSaved}</p> */}
        </div>

        <div>CHART</div>

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
        </div>
      </section>
    );
  }
}

export default Dashboard;
