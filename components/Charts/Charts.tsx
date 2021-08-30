//********** IMPORTS ************* */
import LineChart from './LineChart/LineChart';
import BarChart from './BarChart/BarChart';
import DoughnutChart from './DoughnutChart/DoughnutChart';
import PieChart from './PieChart/PieChart';
import PolarChart from './PolarChart/PolarChart';
// import React from 'react';
//******************************** */

interface ChartsProps {
    BarChart: any;
    LineChart: any;
    DoughnutChart: any;
    PieChart: any;
    PolarChart: any;
}

const Charts: ChartsProps = {
    // Bar: (props: any) => import('./BarChart/BarChart'),

    LineChart: (props: any) => <LineChart {...props} />,
    BarChart: (phases: any) => <BarChart phases={phases} />,
    DoughnutChart: (props: any) => <DoughnutChart {...props} />,
    PolarChart: (props: any) => <PolarChart {...props} />,
    PieChart: (props: any) => <PieChart {...props} />,
};

export default Charts;
// const Charts = (props: any) => {
//     return { LineChart: <LineChart {...props} />, BarChart: <BarChart {...props} /> };
// };
// export default Charts;
