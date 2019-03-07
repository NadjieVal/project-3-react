import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Tab from "react-bootstrap/Tab";

import "./YourMissions.css";

class YourMissions extends Component {
  render() {
    return (
      <section>
        <div className="YourMissions">
          <h3>The Missions you've accomplished!</h3>
        </div>

        <div>
          <ListGroup>
            {/* map */}
            <ListGroup.Item>
              <Tab.Container>
                <Row className="list">
                  <Col className="leftside">
                    <img src="./images/netflix_icon.png" />
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
        </div>
      </section>
    );
  }
}

export default YourMissions;
