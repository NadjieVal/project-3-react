import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import { getTimeList, getMissionHistory, getCategoryList } from "../api.js";
import { Link } from "react-router-dom";
import moment from "moment";

import "./Dashboard.css";
import Chart from "./Chart.js";

function converted(mins) {
  const originalMinutes = mins;
  mins = Math.abs(mins);

  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  if (originalMinutes < 0) {
    return `-${h}h${m}`;
  } else {
    return `${h}h${m}`;
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      timeSaved: [],
      missionsBooked: []
    };
  }

  componentDidMount() {
    getTimeList().then(response => {
      //console.log("Time time time", response.data);
      this.setState({ timeSaved: response.data });
    });

    getCategoryList().then(response => {
      this.setState({ category: response.data });
    });

    getMissionHistory().then(response => {
      console.log("mission mission mission", response.data);
      this.setState({ missionsBooked: response.data });
    });
  }

  render() {
    const { timeSaved, missionsBooked } = this.state;

    const totalMinutes = timeSaved.reduce(
      (sum, oneInput) => sum + oneInput.time,
      0
    );
    const missionMinutes = missionsBooked.reduce(
      (sum, oneMission) => sum + oneMission.duration,
      0
    );

    const { category } = this.state;
    console.log(category);

    console.log(totalMinutes - missionMinutes);
    return (
      <section>
        <h3>{converted(totalMinutes - missionMinutes)}</h3>

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
          {timeSaved.map(oneCategory => {
            return (
              <ListGroup.Item key={oneCategory._id}>
                <Tab.Container>
                  <Row className="list">
                    <Col className="leftside">
                      <img src={oneCategory.category.icon} alt="icon" />
                      <div className="description">
                        <p>{oneCategory.category.name}</p>

                        {/* {timeSaved.map(oneTime => (
                          <p>{oneTime}</p>
                        ))} */}
                        <p>{moment(oneCategory.createdAt).format("MMM Do")}</p>
                      </div>
                    </Col>
                    <Col className="rightside">
                      <h2>{converted(oneCategory.time)}</h2>
                    </Col>
                  </Row>
                </Tab.Container>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </section>
    );
  }
}

export default Dashboard;
