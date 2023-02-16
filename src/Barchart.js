import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";



function BarChart() {
  return (
    <div style={{opacity : "0" }}>
      <div id="bar-chart">
        <div style={{ maxWidth: "650px"}}>
          <Bar
            data={{
              // Name of the variables on x-axies for each bar
              labels: ["HTML", "CSS", "Javascript", "ReactJS"],
              datasets: [
                {
                  // Label for bars
                  label: "Languages",
                  // Data or value of your each variable
                  data: [652, 319, 1613, 1400],
                  // Color of each bar
                  backgroundColor: ["aqua", "green", "red", "yellow"],
                  // Border color of each bar
                  borderColor: ["aqua", "green", "red", "yellow"],
                  borderWidth: 0.5,
                },
              ],
            }}
            // Height of graph
            height={400}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      // The y-axis value will start from zero
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 15,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BarChart;
