//********** IMPORTS ************* */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
// import dynamic from 'next/dynamic';
import CardData from '../components/Cards/DataCard/DataCard';
import Wrapper from '../helpers/Hoc/Wrappers/Wrapper';
import BarChart from '../components/Charts/BarChart/BarChart';
import PieChart from '../components/Charts/PieChart/PieChart';
import ButtonLink from '../helpers/Hoc/Buttons/ButtonLink';
import LineChart from '../components/Charts/LineChart/LineChart';
import GlobalInfoList from '../components/Typography/GlobalInfoList/GlobalInfoList';
import Icons from '../components/Icons/Icons';
// import * as actions from '../../../store/Actions/actions';
// import Icons from '../../../components/Icons/Icons';
import LoadingSkeleton from '../helpers/LoadingSpinner/LoadingSkeleton';
import { connect } from 'react-redux';
import { numberWithCommas } from '../helpers/Functions/HelperFunctions';
import Charts from '../components/Charts/Charts';
//******************************** */
type GlobalDataType = {
    totalToday: number;
    totalYesterday: number;
};
type GlobalData = {
    [key: string]: GlobalDataType;
};

type TodayDataType = {
    [key: string]: object;
};
interface HomeProps {
    globalData: GlobalData;
    todayData: TodayDataType;
    affectedCountries: number;
    active: number;
    tests: number;
    updated: number;
    phases: object[];
    totalCandidates: number;
    casesHistValue: number[];
    deathsHistValue: number[];
    recoveredHistValue: number[];
    history: {
        thisYear: {
            casesHistory: number[];
            deathsHistory: number[];
            recoveredHistory: number[];
            datesHistory: string[];
        };
    };
}
const Home: React.FC<HomeProps> = ({
    tests,
    active,
    affectedCountries,
    globalData,
    todayData,
    updated,
    casesHistValue,
    deathsHistValue,
    recoveredHistValue,
    history,
    totalCandidates,
    phases,
}) => {
    //- Declarations and useState
    const [pageLoad, setPageLoad] = useState(true);
    let lineChartInfo, todayInfo;

    //----------------------------------------------------------------
    lineChartInfo = todayInfo = <LoadingSkeleton />;
    const globalCards = Object.keys(globalData).map((data: any) => {
        return (
            <CardData
                key={data}
                name={data}
                todayValue={globalData[data].totalToday}
                yesterdayValue={globalData[data].totalYesterday}
            />
        );
    });
    // let todayInfo = (<LoadingSkeleton />) as any;

    if (todayData) {
        todayInfo = Object.keys(todayData).map((data: any, index: number) => {
            return (
                <Wrapper class="card-body-data ta-c" key={data}>
                    <span>{data}</span>
                    <p style={{ marginTop: '0.5rem' }}>{numberWithCommas(todayData[data])}</p>
                </Wrapper>
            );
        });
    }
    // console.log(today_data);
    if (casesHistValue && deathsHistValue && recoveredHistValue) {
        lineChartInfo = (
            <>
                <Wrapper class="card-body-data ta-c">
                    <span>cases: Jan/1 - until now</span>
                    <p style={{ marginTop: '0.5rem' }}>
                        🡩{' '}
                        {numberWithCommas(
                            casesHistValue[casesHistValue.length - 1] - casesHistValue[0]
                        )}
                    </p>
                </Wrapper>
                <Wrapper class="card-body-data ta-c">
                    <span>deaths: Jan/1 - until now </span>
                    <p style={{ marginTop: '0.5rem' }}>
                        🡩{' '}
                        {numberWithCommas(
                            deathsHistValue[deathsHistValue.length - 1] - deathsHistValue[0]
                        )}
                    </p>
                </Wrapper>
                <Wrapper class="card-body-data ta-c">
                    <span>recovered: Jan/1 - until now</span>
                    <p style={{ marginTop: '0.5rem' }}>
                        🡩{' '}
                        {numberWithCommas(
                            recoveredHistValue[recoveredHistValue.length - 1] -
                                recoveredHistValue[0]
                        )}
                    </p>
                </Wrapper>
            </>
        );
    }

    //----------------------------------------------------------------
    //- UseEffect
    useEffect(() => {
        //- useEffect
        // props.fetch_Today_GlobalData();
        // props.fetch_Yesterday_GlobalData();
        // props.fetch_vaccine_data();
        setPageLoad(false);
    }, []);
    let homePage = (
        // <Wrapper class="loading-screen">
        //     <Icons title="loading-tea" />{' '}
        // </Wrapper>
        <></>
    );

    //----------------------------------------------------------------
    return pageLoad ? (
        homePage
    ) : (
        <>
            <Head>
                <link rel="shortcut icon" href="images/virus-1.svg" />
                <title>Home - Covid-19</title>
            </Head>
            <section className="home home-content">
                <Wrapper class="page" style={{ marginBottom: '1rem' }}>
                    <h1>Hi this is Home page</h1>
                </Wrapper>
                <Wrapper class=" main-cards cards-container">{globalCards}</Wrapper>

                <Wrapper class="data cards-container mt-l">
                    <Wrapper class="data-card card flex-65">
                        {/* //- Vaccine Chart */}
                        <Wrapper class=" card-header jc-sb">
                            <h1 className="card-header--text">Vaccine Data </h1>
                            <ButtonLink href="/vaccine" class="btn btn-norm">
                                More Details
                            </ButtonLink>
                        </Wrapper>
                        <Wrapper class="card-body pt-n">
                            <Wrapper class="d-flex jc-c">
                                <Wrapper class="card-body-data ta-c">
                                    {totalCandidates ? (
                                        <>
                                            <span className="" style={{ height: '2rem' }}>
                                                {/* <Icons title="candidate" class="icon" /> */}
                                                Total candidates
                                            </span>
                                            <p>{totalCandidates}</p>
                                        </>
                                    ) : (
                                        <LoadingSkeleton />
                                    )}
                                </Wrapper>
                            </Wrapper>
                            <Wrapper class="chart-container vaccine-chart">
                                <BarChart phases={phases} />
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                    {/* //- Pie chart */}
                    <Wrapper class="data-card card flex-33">
                        <Wrapper class=" card-header">
                            <h1 className="card-header--text">Today's Data </h1>
                        </Wrapper>
                        <Wrapper class="card-body pt-n">
                            <Wrapper class="d-flex jc-sb mb-m">{todayInfo}</Wrapper>
                            <Wrapper class="chart-container pie-chart">
                                {' '}
                                <PieChart todayData={todayData} />
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Wrapper class="data cards-container mt-3">
                    {/* //- Global Info list */}
                    <Wrapper class="data-card card flex-33 ">
                        <Wrapper class=" card-header">
                            <Wrapper class="card-header--icon mr-s">
                                <Icons title="info" />
                            </Wrapper>
                            <h1 className="card-header--text">Global Data information</h1>
                        </Wrapper>
                        {/* //- Global data info */}
                        <Wrapper class="card-body globalInfo">
                            <GlobalInfoList
                                tests={tests}
                                active={active}
                                affectedCountries={affectedCountries}
                                updated={updated}
                            />
                        </Wrapper>
                    </Wrapper>
                    {/* //- 2021 History cases */}
                    <Wrapper class="data-card card flex-65">
                        <Wrapper class=" card-header jc-sb">
                            <h1 className="card-header--text">
                                2021 History Data: Confirmed Cases
                            </h1>
                            <ButtonLink
                                href="/charts"
                                class="btn btn-norm"
                                style={{ float: 'right' }}
                            >
                                More details
                            </ButtonLink>
                        </Wrapper>
                        <Wrapper class="card-body pt-n">
                            <Wrapper class="d-flex jc-sar" style={{ marginBottom: '1rem' }}>
                                {lineChartInfo}
                            </Wrapper>
                            <Wrapper class="chart-container line-chart">
                                {' '}
                                <LineChart
                                    casesHistory={history.thisYear.casesHistory}
                                    deathsHistory={history.thisYear.deathsHistory}
                                    recoveredHistory={history.thisYear.recoveredHistory}
                                    datesHistory={history.thisYear.datesHistory}
                                />{' '}
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </section>
        </>
    );
};
//----------------------------------------------------------------
type thisYearType = {
    casesHistoryData: number[];
    deathsHistoryData: number[];
    recoveredHistoryData: number[];
    dates: string[];
};

type globalDataType = {
    [key: string]: number;
};
const mapStateToProps = (state: {
    VaccineData: { phases: object[]; totalCandidates: number };
    GlobalData: {
        active: number;
        tests: number;
        globalData: GlobalData;
        todayData: TodayDataType;
        updatedTimer: number;
        affectedCountries: number;
    };
    historyData: {
        thisYear: thisYearType;
    };
}) => ({
    globalData: state.GlobalData.globalData,
    phases: state.VaccineData.phases,
    totalCandidates: state.VaccineData.totalCandidates,
    todayData: state.GlobalData.todayData,
    affectedCountries: state.GlobalData.affectedCountries,
    active: state.GlobalData.active,
    tests: state.GlobalData.tests,
    updated: state.GlobalData.updatedTimer,
    casesHistValue: state.historyData.thisYear.casesHistoryData,
    deathsHistValue: state.historyData.thisYear.deathsHistoryData,
    recoveredHistValue: state.historyData.thisYear.recoveredHistoryData,
    history: {
        thisYear: {
            casesHistory: state.historyData.thisYear.casesHistoryData,
            deathsHistory: state.historyData.thisYear.deathsHistoryData,
            recoveredHistory: state.historyData.thisYear.recoveredHistoryData,
            datesHistory: state.historyData.thisYear.dates,
        },
    },
});

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
