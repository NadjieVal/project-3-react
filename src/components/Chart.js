import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import groupBy from "lodash.groupby";
// import Axios from "axios";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Netflix",
            backgroundColor: "rgba(133, 104, 152, 0.75)",
            data: [3, 3, 4, 4, 2, 8, 6]
          },
          // {
          //   label: "Gaming",
          //   backgroundColor: "rgba(170, 197, 213, 1)",
          //   data: [6, 8, 2, 4, 2, 11, 14]
          // },
          {
            label: "Social Media",
            backgroundColor: "rgba(133, 104, 152, 0.75)",
            data: [4, 5, 6, 4, 9, 10, 10]
          }
        ]
      }
    };
  }

  // componentDidMount() {
  //   Axios.get()
  //   this.setState({ :  });
  // }

  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    console.log(ctx);
    const gradient = ctx.createLinearGradient(0, 0, 600, 550);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)");
    return gradient;
  };

  getChartData = canvas => {
    const { timeSaved } = this.props;
    const groupedTime = groupBy(timeSaved, oneInput => {
      return new Date(oneInput.createdAt).getDay();
    });

    // for every day of the week
    const dayTotals = [1, 2, 3, 4, 5, 6, 0].map(oneDay => {
      // return 0 if there's no data for the day
      if (!groupedTime[oneDay]) {
        return 0;
      }

      // return the total if there is data for the day
      return groupedTime[oneDay].reduce((sum, input) => sum + input.time, 0);
    });

    const data = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          backgroundColor: "rgba(133, 104, 152, 0.75)",
          data: dayTotals
        }
      ]
    };

    return data;
  };

  render() {
    return (
      <div className="chart">
        <h3>Chart TimeFor</h3>
        <Line
          options={{ responsive: true }}
          data={this.getChartData}
          legend={{ display: false }}
        />
      </div>
    );
  }
}

export default Chart;
