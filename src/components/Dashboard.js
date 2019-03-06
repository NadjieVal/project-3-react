import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Button from "react-bootstrap/Button";
import "./Dashboard.css";
import Chart from "./Chart.js";

function converted(mins) {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  return `${h}h${m}`;
}

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
    const totalMinutes = timeSaved.reduce(
      (sum, oneInput) => sum + oneInput.time,
      0
    );
    return (
      <section>
        <h3>3h30</h3>
        <h3>{converted(totalMinutes)}</h3>
        {/* <div>
          
          <p>Available Time</p> */}
        {/* <p>{this.state.TimeSaved}</p> */}
        <Chart timeSaved={timeSaved} />

        <div>
          <Button variant="secondary">Add Time</Button>
          <Button variant="secondary">Spend Time</Button>
        </div>
        <div>
          <h5>Recently Added</h5>
        </div>
        {/* </div>
       
        <div>
          <ul>
            <li>LOGO + ACTIVITY + TIME SAVED</li>
          </ul>
        </div> */}
        <ListGroup>
          <ListGroup.Item>
            <div className="list">
              <div>Netflix</div>
              <div>3h</div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>Youtube</ListGroup.Item>
          <ListGroup.Item>Netflix</ListGroup.Item>
        </ListGroup>
      </section>
    );
  }
}

export default Dashboard;
