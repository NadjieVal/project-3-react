import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import { getTimeList } from "../api.js";
import { Link } from "react-router-dom";

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
      category: [],
      timeSaved: []
    };
  }

  componentDidMount() {
    getTimeList().then(response => {
      console.log("Time time time", response.data);
      this.setState({ timeSaved: response.data });
    });
  }

  render() {
    const { timeSaved } = this.state;

    const totalMinutes = timeSaved.reduce(
      (sum, oneInput) => sum + oneInput.time,
      0
    );
    return (
      <section>
        <h3>{converted(totalMinutes)}</h3>
        <Chart timeSaved={timeSaved} />

        <div>
          <Link to="/categories">
            <button className="primary-btn">Add Time</button>
          </Link>
          <Link to="/charities">
            <button className="primary-btn">Spend Time</button>
          </Link>
        </div>
        <div>
          <h5>Recently Added</h5>
        </div>

        <ListGroup>
          {/* map */}
          <ListGroup.Item>
            <Tab.Container>
              <Row className="list">
                <Col className="leftside">
                  <img src="./images/netflix_icon.png" alt="icon" />
                  <div className="description">
                    <p>Netflix</p>
                    <p>Date</p>
                  </div>
                </Col>
                <Col className="rightside">
                  <h2>3h</h2>
                </Col>
              </Row>
            </Tab.Container>
          </ListGroup.Item>
          {/* end of map */}
        </ListGroup>
      </section>
    );
  }
}

export default Dashboard;
