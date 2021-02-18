//********** IMPORTS ************* */
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
//******************************** */

const CardCharts = (props: any) => {
    // useEffect(() =>{
    //      const chartOptions = {
    //          ...{
    //              maintainAspectRatio: true,
    //              responsive: true,
    //              legend: {
    //                  display: false,
    //              },
    //              tooltips: {
    //                  enabled: false,
    //                  custom: false,
    //              },
    //              elements: {
    //                  point: {
    //                      radius: 0,
    //                  },
    //                  line: {
    //                      tension: 0.33,
    //                  },
    //              },
    //              scales: {
    //                  xAxes: [
    //                      {
    //                          gridLines: false,
    //                          ticks: {
    //                              display: false,
    //                          },
    //                      },
    //                  ],
    //                  yAxes: [
    //                      {
    //                          gridLines: false,
    //                          scaleLabel: false,
    //                          ticks: {
    //                              display: false,
    //                              isplay: false,
    //                              // Avoid getting the graph line cut of at the top of the canvas.
    //                              // Chart.js bug link: https://github.com/chartjs/Chart.js/issues/4790
    //                              suggestedMax: Math.max(...props.chartData[0].data) + 1,
    //                          },
    //                      },
    //                  ],
    //              },
    //          },
    //          ...props.chartOptions,
    //      };

    //      const chartConfig = {
    //          ...{
    //              type: 'line',
    //              data: {
    //                  ...{
    //                      labels: props.chartLabels,
    //                  },
    //                  ...{
    //                      datasets: props.chartData,
    //                  },
    //              },
    //              options: chartOptions,
    //          },
    //          ...props.chartConfig,
    //      };

    //      new Chart(canvasRef.current, chartConfig);
    // })
    return <div></div>;
};

export default CardCharts;
