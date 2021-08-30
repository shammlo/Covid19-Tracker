//********** IMPORTS ************* */
import React from 'react';
import Head from 'next/head';
import Wrapper from '../helpers/Hoc/Wrappers/Wrapper';
import LineChart from '../components/Charts/LineChart/LineChart';
import PolarChart from '../components/Charts/PolarChart/PolarChart';
import DoughnutChart from '../components/Charts/DoughnutChart/DoughnutChart';
import { numberWithCommas } from '../helpers/Functions/HelperFunctions';
import { connect } from 'react-redux';
//******************************** */
//- TYPES
type CasesType = {
    cases: number;
    deaths: number;
    recovered: number;
};
type TotalsObject = {
    [key: string]: CasesType & number;
};
type TodayDataObjectType = {
    [key: string]: number[];
};
interface ChartPageProps {
    history: {
        casesHistory: number[];
        deathsHistory: number[];
        recoveredHistory: number[];
        datesHistory: string[];
    };
    total: TotalsObject;
    todayData: TodayDataObjectType;
}
//----------------------------------------------------------------
//* MAIN FUNCTIONAL COMPONENT
const charts: React.FC<ChartPageProps> = ({ history, total, todayData }) => {
    let totalsInfo = Object.keys(total).map((data: string | number) => {
        return (
            <Wrapper class="card-body-analytics ta-c" key={data}>
                <span>{data}</span>
                <p style={{ marginTop: '0.5rem' }}>{numberWithCommas(total[data])}</p>
            </Wrapper>
        );
    });

    //----------------------------------------------------------------
    //- Return
    return (
        <>
            <Head>
                {/* <link rel="shortcut icon" href="/virus-1.svg" /> */}
                <title>Charts - Covid-19</title>
            </Head>
            <div className="home">
                <div className="page" style={{ marginBottom: '1rem' }}>
                    <h1>Hi this is Charts page</h1>
                </div>
            </div>
            <section className="chart-data chart-content">
                <Wrapper class="chart-info cards-container">
                    {/* //-Line Chart */}

                    <Wrapper class="chart-info-content card flex-100">
                        <Wrapper class=" card-header jc-sb">Complete History</Wrapper>
                        <Wrapper class="card-body pt-n">
                            <Wrapper class="d-flex jc-sar"> {totalsInfo}</Wrapper>

                            <Wrapper class="chart-container">
                                <LineChart
                                    casesHistory={history.casesHistory}
                                    deathsHistory={history.deathsHistory}
                                    recoveredHistory={history.recoveredHistory}
                                    datesHistory={history.datesHistory}
                                />
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                {/* //- Polar Chart */}
                <Wrapper class="chart-info cards-container mt-3">
                    <Wrapper class="chart-info-content data-card card flex-50">
                        <Wrapper class=" card-header jc-sb">complete history</Wrapper>
                        <Wrapper class="card-body pt-n">
                            <Wrapper class="card-body-analytics">
                                <PolarChart todayData={todayData} />
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>

                    {/* //- DoughnutChart Chart */}

                    <Wrapper class="chart-info-content data-card card flex-50">
                        <Wrapper class=" card-header jc-sb">complete history</Wrapper>
                        <Wrapper class="card-body pt-n">
                            <Wrapper class="card-body-analytics">
                                <DoughnutChart todayData={todayData} />
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </section>
        </>
    );
};
//----------------------------------------------------------------
const mapStateToProps = (state: any) => ({
    history: {
        casesHistory: state.historyData.allHistory.allCasesHistory,
        deathsHistory: state.historyData.allHistory.allDeathsHistory,
        recoveredHistory: state.historyData.allHistory.allRecoveredHistory,
        datesHistory: state.historyData.allHistory.allDates,
    },
    total: {
        cases: state.GlobalData.total.cases,
        deaths: state.GlobalData.total.deaths,
        recovered: state.GlobalData.total.recovered,
    },
    todayData: state.GlobalData.todayData,
});

export default connect(mapStateToProps)(charts);
