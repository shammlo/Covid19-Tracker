//********** IMPORTS ************* */
import React, { useState, useEffect, memo } from 'react';
import { Line } from 'react-chartjs-2';
// import axios from 'axios';

//******************************** */
interface LineChartProps {
    casesHistory: number[];
    deathsHistory: number[];
    recoveredHistory: number[];
    datesHistory: string[];
}
export const LineChart: React.FC<LineChartProps> = React.memo(
    ({ casesHistory, deathsHistory, recoveredHistory, datesHistory }) => {
        const [lineChart, setLineChart]: any[] = useState({
            casesData: null,
            deathsData: null,
            recoveredData: null,
            dates: null,
        });

        const data: any = (canvas: { getContext: (arg0: string) => any }) => {
            const ctx = canvas.getContext('2d');
            let width = window.innerWidth || document.body.clientWidth;
            let casesGrid = ctx.createLinearGradient(0, 0, width, 0);
            let deathGrid = ctx.createLinearGradient(0, 0, width, 0);
            let recGrid = ctx.createLinearGradient(0, 0, width, 0);

            const casesGridColor = () => {
                casesGrid.addColorStop(0, '#7C4DFF');
                casesGrid.addColorStop(0.3, '#448AFF');
                casesGrid.addColorStop(0.6, '#00BCD4');
                casesGrid.addColorStop(1, '#1DE9B6');
                return casesGrid;
            };
            const deathsGridColor = () => {
                deathGrid.addColorStop(0, '#F44336');
                deathGrid.addColorStop(0.3, '#F50057');
                deathGrid.addColorStop(0.6, '#FF4081');
                deathGrid.addColorStop(1, '#FF9100');
                return deathGrid;
            };
            const recoveredGridColor = () => {
                recGrid.addColorStop(0, '#71ff2f');
                recGrid.addColorStop(0.3, '#80ff72');
                recGrid.addColorStop(0.6, '#7cffcb');
                recGrid.addColorStop(1, '#74f2ce');
                return recGrid;
            };

            //  '#7C4DFF', '#448AFF', '#00BCD4', '#1DE9B6';
            return {
                responsive: true,
                labels: datesHistory,
                label: 'Cases',
                //- Datasets
                datasets: [
                    {
                        data: casesHistory,
                        label: 'Cases',
                        // backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        // pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                        // borderColor: 'rgba(54, 162, 235, 1)',
                        borderColor: casesGridColor,
                        pointBorderColor: casesGridColor,
                        pointBackgroundColor: casesGridColor,
                        pointHoverBackgroundColor: casesGridColor,
                        pointHoverBorderColor: casesGridColor,
                        pointBorderWidth: 3,
                        pointHoverRadius: 3,
                        pointHoverBorderWidth: 1,
                        pointRadius: 3,
                        fill: 'false',
                        borderWidth: 4,
                    },
                    {
                        data: deathsHistory,
                        label: 'Deaths',
                        backgroundColor: 'rgba(214, 102, 121, 0.3)',
                        // borderColor: 'rgba(214, 102, 121, 1)',
                        borderColor: deathsGridColor,
                        pointBorderColor: deathsGridColor,
                        pointBackgroundColor: deathsGridColor,
                        pointHoverBackgroundColor: deathsGridColor,
                        pointHoverBorderColor: deathsGridColor,
                        pointBorderWidth: 3,
                        pointHoverRadius: 3,
                        pointHoverBorderWidth: 1,
                        pointRadius: 3,
                        fill: false,
                        borderWidth: 4,
                    },
                    {
                        data: recoveredHistory,
                        label: 'Recovered',
                        borderColor: recoveredGridColor,
                        pointBorderColor: recoveredGridColor,
                        pointBackgroundColor: recoveredGridColor,
                        pointHoverBackgroundColor: recoveredGridColor,
                        pointHoverBorderColor: recoveredGridColor,
                        pointBorderWidth: 3,
                        pointHoverRadius: 3,
                        pointHoverBorderWidth: 1,
                        pointRadius: 3,
                        fill: false,
                        borderWidth: 4,
                    },
                ],
            };
        };
        const options = {
            scaleFontColor: 'white',

            maintainAspectRatio: false,
            legend: {
                display: true,
                labels: {
                    fontSize: 14,
                    padding: 20,
                    usePointStyle: true,
                    boxWidth: 8,
                    fontColor: '#818692', // this here
                },
            },

            scales: {
                xAxes: [
                    {
                        ticks: {
                            // maxTicksLimit: 20,
                            fontColor: '#818692', // this here
                            autoSkip: false,
                            // maxTicksLimit: 25,
                        },
                        // gridLines: {
                        //     color: 'rgba(0, 0, 0, 0)',
                        // },
                        type: 'time',
                        scaleLabel: {
                            labelString: 'Day',
                        },
                        time: {
                            //  min: ,
                            parser: 'MM/DD/YYYY',
                            displayFormats: {
                                day: ' M/D/YY',
                            },
                        },
                    },
                ],
                yAxes: [
                    {
                        // gridLines: {
                        //     color: 'rgba(56, 67, 97, 1)',
                        // },
                        ticks: {
                            fontColor: '#818692', // this here

                            beginAtZero: false,
                            callback: function (value: number) {
                                if (value >= 0 && value < 1000) return value;
                                if (value >= 1000 && value < 1000000) return value / 1000 + 'k';
                                if (value >= 1000000 && value < 1000000000)
                                    return value / 1000000 + 'm';
                                return value;
                            },
                        },
                    },
                ],
            },
            plugins: {
                datalabels: {
                    display: false,
                },
            },
        };

        useEffect(() => {
            console.log('[Line Chart] was rendered');

            setLineChart({
                casesData: casesHistory,
                deathsData: deathsHistory,
                recoveredData: recoveredHistory,
                dates: datesHistory,
            });
        }, []);

        return lineChart ? (
            <Line options={options} data={data} height={270} redraw={true} key={Math.random()} />
        ) : (
            <Line
                options={options}
                data={{
                    labels: datesHistory,
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)',
                        },
                    ],
                }}
                height={270}
                redraw={true}
                key={Math.random()}
            />
        );
    }
);
//----------------------------------------------------------------

export default memo(LineChart);
