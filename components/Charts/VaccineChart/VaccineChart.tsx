//********** IMPORTS ************* */
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false }); // import Chart from 'chart.js';
//******************************** */

const VaccineChart = (props: any) => {
    useEffect(() => {});
    const [chart, setChart] = useState({
        series: [
            {
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
            {
                name: 'Free Cash Flow',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            },
        ],
        options: {
            legend: {
                show: false,
            },
            chart: {
                foreColor: '#fff',
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
                endingShape: 'rounded',
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: 'Candidates',
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                // y: {
                //   formatter: function (val) {
                //     return "$ " + val + " thousands"
                //   }
                // }
            },
        },
    });

    return <Chart options={chart.options} series={chart.series} type="bar" height={220} />;
};

export default VaccineChart;
