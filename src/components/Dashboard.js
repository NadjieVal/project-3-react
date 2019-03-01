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
        <p>Welcome to TimeFor!</p>

        <div>
          <p>TimeSaved</p>
          {/* <p>{this.state.TimeSaved}</p> */}
        </div>
        <div>
          <p>date: february 2019</p>
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
