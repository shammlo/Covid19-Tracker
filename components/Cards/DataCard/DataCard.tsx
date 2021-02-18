//********** IMPORTS ************* */
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
//******************************** */

const DataCard = (props: any) => {
    const canvasRef = useRef<any>(null);

    useEffect(() => {
        const chartOptions = {
            ...{
                maintainAspectRatio: true,
                responsive: true,
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                    custom: false,
                },
                elements: {
                    point: {
                        radius: 0,
                    },
                    line: {
                        tension: 0.33,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: false,
                            ticks: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: false,
                            scaleLabel: false,
                            ticks: {
                                display: false,
                                isplay: false,
                                // Avoid getting the graph line cut of at the top of the canvas.
                                // Chart.js bug link: https://github.com/chartjs/Chart.js/issues/4790
                                // suggestedMax: Math.max(...props.chartData[0].data) + 1,
                            },
                        },
                    ],
                },
            },
            ...props.chartOptions,
        };

        const chartConfig = {
            ...{
                type: 'line',
                data: {
                    ...{
                        labels: props.chartLabels,
                    },
                    ...{
                        datasets: props.chartData,
                    },
                },
                options: chartOptions,
            },
            ...props.chartConfig,
        };

        new Chart(canvasRef.current, chartConfig);
    });
    return (
        <div className="card">
            <div className="card__box box-one">
                <span className="card__box--icon">
                    {/* <img className="icon" src="img/health.svg" alt="Confirmed Icon" /> */}
                </span>
                <h3 className="heading-3">Total name</h3>
                <h2 className="heading-2 margin-top-small">amount</h2>
                <div className="card__box--info">
                    <span className="info-increase">
                        <span id="caseIncrease">00 </span>
                    </span>
                    <span className="info-text">
                        from yesterday
                        <span id="totalYesterday" className="yel">
                            00
                        </span>
                    </span>
                </div>
                <canvas height={120} ref={canvasRef} className={`stats-small `} />
            </div>
        </div>
    );
};

export default DataCard;
