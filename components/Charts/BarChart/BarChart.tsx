//********** IMPORTS ************* */
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import '../../../helpers/Custom/RoundedBars/roundedBar';
//******************************** */
interface BarChartProps {
    phases: object[];
}
const BarChart: React.FC<BarChartProps> = ({ phases }) => {
    // let theme = typeof localStorage != 'undefined' && (localStorage as any).getItem('theme');
    // const fontColor = theme === 'light' ? '#000' : '#fff';
    let label: any[] = [];
    let datasets: any[] = [];
    const [chartData, setChartData] = useState({ datasets: null, labels: null }) as any;
    let candidates: any[] = [];
    if (phases) {
        phases.map((phase: any, index: number) => {
            // datasets.push({
            //     label: phase.phase,
            //     data: [+phase.candidates],
            //     backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            //     borderColor: ['rgba(255, 99, 132, 1)'],
            //     borderWidth: 1,
            // });
            label.push(phase.phase);
            candidates.push(phase.candidates);
        });
    }
    // rgba(0, 207, 232, 1);
    const data1: any = (canvas: { getContext: (arg0: string) => any }) => {
        const ctx = canvas.getContext('2d');
        let width = window.innerHeight || document.body.clientHeight;
        let casesGrid = ctx.createLinearGradient(0, 0, 0, width);
        let deathGrid = ctx.createLinearGradient(0, 0, 0, width);
        let recGrid = ctx.createLinearGradient(0, 0, 0, width);

        const casesGridColor = () => {
            casesGrid.addColorStop(0, '#7C4DFF');
            casesGrid.addColorStop(0.3, '#448AFF');
            casesGrid.addColorStop(0.6, '#00BCD4');
            casesGrid.addColorStop(1, '#1DE9B6');
            return casesGrid;
        };

        //  '#7C4DFF', '#448AFF', '#00BCD4', '#1DE9B6';
        return {
            responsive: true,
            labels: label,
            label: 'Cases',
            //- Datasets
            datasets: [
                {
                    label: label.map((label: any) => label),
                    data: candidates,
                    barPercentage: 0.5,

                    backgroundColor: casesGridColor,
                    borderColor: casesGridColor,
                    borderWidth: 1,
                },
            ],
        };
    };
    let data: any = {
        // labels: ,
        // datasets:
        labels: label,
        datasets: [
            {
                label: label.map((label: any) => label),
                data: candidates,
                barPercentage: 0.5,

                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    let options: any = {
        maintainAspectRatio: false,
        cornerRadius: 25,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false,
        },

        scales: {
            xAxes: [
                {
                    ticks: {
                        fontColor: '#818692', // this here
                    },
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        fontColor: '#818692', // this here
                        beginAtZero: true,
                    },
                },
            ],
        },
        plugins: {
            datalabels: {
                color: '#fff',
                // formatter: function (value) {
                //     return Math.round(value) + '%';
                // },
                font: {
                    weight: 'bold',
                    size: 16,
                },
            },
        },
    };

    useEffect(() => {
        setChartData({ ...chartData, labels: label, datasets: datasets });
    }, []);

    return chartData ? (
        <Bar data={data1} options={options} height={270} />
    ) : (
        <Bar
            data={{
                labels: ['1900', '1950', '1999', '2050'],
                datasets: [
                    {
                        label: 'Africa',
                        backgroundColor: '#3e95cd',
                        data: [1200, 1400, 783, 2478],
                        barPercentage: 0.5,
                    },
                    {
                        label: 'Europe',
                        backgroundColor: '#8e5ea2',
                        data: [408, 1754, 675, 734],
                        barPercentage: 0.5,
                    },
                ],
            }}
            options={options}
            height={270}
        />
    );
};

export default React.memo(BarChart);
//   backgroundColor: [
//                     'rgba(255, 99, 132, 0.7)',
//                     'rgba(54, 162, 235, 0.7)',
//                     'rgba(255, 206, 86, 0.7)',
//                     'rgba(75, 192, 192, 0.7)',
//                     'rgba(153, 102, 255, 0.7)',
//                     'rgba(255, 159, 64, 0.7)',
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)',
//                 ],
