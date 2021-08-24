import React from "react";
import {Bar} from "react-chartjs-2";

function Chart() {
    const data = {
        labels: ["RECOVERED", "CONFIRMED", "DEATH", "ACTIVE"],
        datasets: [
            {
                label: "COVID-19 LIVE",
                data: [8, 9, 8, 7],
                backgroundColor: 'blue'
            },
            {
                label: "COVID-19 LIVE ",
                data: [9, 8, 9, 7],
                backgroundColor: 'green'
            }
        ]
    }
    const options ={
        title: {
            display: true,
            text: 'LIVE TRACKER'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 10,
                        stepSize: 1
                    }
                }
            ]
        }

    }
    return (
        <Bar data={data} options={options} />
    )
}
    export default Chart;