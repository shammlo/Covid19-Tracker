//********** IMPORTS ************* */
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
//******************************** */
type todayDataObjectType = {
    [key: string]: number[];
};
interface DoughnutChartProps {
    todayData: todayDataObjectType;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ todayData }) => {
    const [doughnutData, setDoughnutData] = useState<any[]>([]);
    let today_data: object[] = [];
    let labels: string[] = [];
    if (todayData) {
        Object.keys(todayData).map((data: any) => {
            // setDoughnutData(todayData[data]);
            today_data.push(todayData[data]);
            labels.push(data);
        });
    }
    const DoughnutChartData = {
        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data: today_data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
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
        console.log(today_data);
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
    const options: any = {
        scaleFontColor: 'white',
        maintainAspectRatio: false,
        legend: {
            display: true,
            labels: {
                usePointStyle: true,
                boxWidth: 10,
                fontColor: '#818692', // this here
            },
        },
        // scale: {
        //     gridLines: {
        //         color: 'red',
        //     },
        // },
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
    return <Doughnut data={data} options={options} height={270} />;
};
export default DoughnutChart;
