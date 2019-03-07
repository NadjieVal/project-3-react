import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import { getTimeList, getCategoryList } from "../api.js";
import { Link } from "react-router-dom";
import moment from "moment";

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
      // createdAt: []
    };
  }

  componentDidMount() {
    getTimeList().then(response => {
      //console.log("Time time time", response.data);
      this.setState({ timeSaved: response.data });
    });

    getCategoryList().then(response => {
      // console.log("CATEGORIES", response.data);
      this.setState({ category: response.data });
    });
  }

  render() {
    const { timeSaved } = this.state;
    console.log(timeSaved);
    const totalMinutes = timeSaved.reduce(
      (sum, oneInput) => sum + oneInput.time,
      0
    );
    const { category } = this.state;
    console.log(category);
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

        {/* <ListGroup>
          
          <ListGroup.Item>
            <Tab.Container>
              <Row className="list">
                <Col className="leftside">
                  <img src="./images/netflix_icon.png" alt="icon" />
                  <div className="description">
                    <p>Netflix</p>
                    {/* <p>{moment(createdAt).format("MMM Do")}</p> */}
        {/* </div>
                </Col>
                <Col className="rightside">
                  <h2>3h</h2>
                </Col>
              </Row>
            </Tab.Container>
          </ListGroup.Item>
          
        </ListGroup> */}

        <ListGroup>
          {timeSaved.map(oneCategory => {
            return (
              <ListGroup.Item key={oneCategory._id}>
                <Tab.Container>
                  <Row className="list">
                    <Col className="leftside">
                      <img src={oneCategory.category.icon} alt="icon" />
                      <div className="description">
                        {/* <p>{oneCategory.name}</p> */}

                        {/* {timeSaved.map(oneTime => (
                          <p>{oneTime}</p>
                        ))} */}
                        <p>{moment(oneCategory.createdAt).format("MMM Do")}</p>
                      </div>
                    </Col>
                    <Col className="rightside">
                      <h2>{oneCategory.time}</h2>
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

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       categoryArray: [],
//       timeSaved: []
//     };
//   }

//   componentDidMount() {
//     getTimeList().then(response => {
//       console.log("Time time time", response.data);
//       this.setState({ timeSaved: response.data });
//     });
//     getCategoryList().then(response => {
//       console.log("CATEGORIES", response.data);
//       this.setState({ categoryArray: response.data });
//     });
//   }

//   render() {
//     const { timeSaved, categoryArray } = this.state;

//     const totalMinutes = timeSaved.reduce(
//       (sum, oneInput) => sum + oneInput.time,
//       0
//     );

//     return (
//       <section>
//         <h3>{converted(totalMinutes)}</h3>
//         <Chart timeSaved={timeSaved} />

//         <div>
//           <Link to="/categories">
//             <button className="primary-btn">Add Time</button>
//           </Link>
//           <Link to="/charities">
//             <button className="primary-btn">Spend Time</button>
//           </Link>
//         </div>
//         <div>
//           <h5>Recently Added</h5>
//         </div>

//         <ListGroup>
//           {categoryArray.map(oneCategory => {
//             <ListGroup.Item key={oneCategory._id}>
//               <Tab.Container>
//                 <Row className="list">
//                   <Col className="leftside">
//                     <img src={oneCategory.icon} alt="icon" />
//                     <div className="description">
//                       <p>{oneCategory.name}</p>
//                       <p>{moment(oneCategory.createdAt).format("MMM Do")}</p>
//                     </div>
//                   </Col>
//                   <Col className="rightside">
//                     <h2>{oneCategory.time}</h2>
//                   </Col>
//                 </Row>
//               </Tab.Container>
//             </ListGroup.Item>;
//           })}
//         </ListGroup>
//       </section>
//     );
//   }
// }

//export default Dashboard;
