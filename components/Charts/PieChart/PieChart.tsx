//********** IMPORTS ************* */
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import 'chartjs-plugin-datalabels';
//******************************** */
interface PieChartProps {
    todayData: { [key: string]: object };
}
const PieChart: React.FC<PieChartProps> = ({ todayData }) => {
    const [pieChart, setPieChart] = useState({ today_data: null }) as any;
    let today_data: object[] = [];
    let labels: string[] = [];
    if (todayData) {
        Object.keys(todayData).map((data: any, index: number) => {
            today_data.push(todayData[data]);
            labels.push(data);
        });
    }

    const pieData = {
        maintainAspectRatio: false,
        responsive: false,

        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data: today_data,
                backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const pieChar2t = {
        labels: ['Today Cases', 'Today Deaths', 'Today Recovered', 'Critical'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)',
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
    const data: any = (canvas: any) => {
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth || document.body.clientWidth;
        let casesGrid = ctx.createLinearGradient(0, 0, width, 0);
        let deathGrid = ctx.createLinearGradient(0, 0, width, 0);
        let recGrid = ctx.createLinearGradient(0, 0, width, 0);

        const gradientOne = ctx.createLinearGradient(0, 0, 0, 400);
        const gradientTwo = ctx.createLinearGradient(0, 0, 100, 400);
        const gradientThree = ctx.createLinearGradient(0, 0, 0, 400);
        const gradientFour = ctx.createLinearGradient(0, 0, 0, 400);
        const colors = [];
        for (let i = 0; i < today_data.length; i++) {
            // console.log(i);

            switch (i) {
                case 0:
                    gradientOne.addColorStop(0, '#7C4DFF');
                    gradientOne.addColorStop(1, '#1DE9B6');
                    colors.push(gradientOne);
                    break;
                case 1:
                    // gradientTwo.addColorStop(0, 'rgb(248, 188, 80)');
                    // gradientTwo.addColorStop(1, 'rgb(243, 217, 53)');
                    gradientTwo.addColorStop(0, '#F44336');
                    gradientTwo.addColorStop(0.3, '#F50057');
                    gradientTwo.addColorStop(0.6, '#FF4081');
                    gradientTwo.addColorStop(1, '#FF9100');

                    colors.push(gradientTwo);
                    break;
                case 2:
                    // gradientThree.addColorStop(0, 'rgb(147, 229, 151)');
                    // gradientThree.addColorStop(0, 'rgba(75, 192, 192)');
                    // gradientThree.addColorStop(0, '#7cffcb');
                    // gradientThree.addColorStop(1, '#74f2ce');
                    gradientThree.addColorStop(0, '#71ff2f');
                    gradientThree.addColorStop(0.3, '#80ff72');
                    gradientThree.addColorStop(0.6, '#7cffcb');
                    gradientThree.addColorStop(1, '#74f2ce');
                    colors.push(gradientThree);
                    break;
                case 3:
                    // gradientFour.addColorStop(0, 'rgb(123, 98, 221)');
                    // gradientFour.addColorStop(1, 'rgb(37, 77, 180)');
                    gradientFour.addColorStop(0, ' #FFA12C');
                    gradientFour.addColorStop(0.3, '#FF872C');
                    gradientFour.addColorStop(0.6, '#FE612C');
                    gradientFour.addColorStop(1, '#FD3A2D');
                    colors.push(gradientFour);
                    break;
            }
        }
        //  '#7C4DFF', '#448AFF', '#00BCD4', '#1DE9B6';
        return {
            maintainAspectRatio: false,
            responsive: false,

            labels: labels,
            datasets: [
                {
                    label: '# of Votes',
                    data: today_data,
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1,
                },
            ],
        };
    };
    //----------------------------------------------------------------
    //- useEffect
    useEffect(() => {
        setPieChart({
            today_data: today_data,
        });
    }, []);

    //----------------------------------------------------------------
    //- Return
    return pieChart ? (
        <Pie
            data={data}
            options={{
                // percentageInnerCutout: 90,
                maintainAspectRatio: false,
                legend: {
                    display: false,
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
            }}
            height={270}
        />
    ) : (
        <Pie
            data={pieChar2t}
            options={{
                maintainAspectRatio: false,
                legend: {
                    display: true,
                },
            }}
            height={270}
        />
    );
};
//----------------------------------------------------------------

export default React.memo(PieChart);
