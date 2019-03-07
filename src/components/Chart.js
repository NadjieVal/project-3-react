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
            backgroundColor: "rgba(122, 224, 235, 100)",
            data: []
          },
          {
            label: "Social Media",
            backgroundColor: "rgba(122, 224, 235, 100)",
            data: []
          }
        ]
      }
    };
  }

  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    console.log(ctx);
    const gradient = ctx.createLinearGradient(500, 0, 100, 0);

    gradient.addColorStop(0, "rgba(61, 144, 222, 0.6)");
    gradient.addColorStop(1, "rgba(122, 224, 235, 0.6)");
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
          backgroundColor: "rgba(122, 224, 235, 100)",
          data: dayTotals
        }
      ]
    };

    return data;
  };

  render() {
    return (
      <div className="chart">
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
