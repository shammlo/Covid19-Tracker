//********** IMPORTS ************* */
import React, { useEffect } from 'react';
import Head from 'next/head';
// import dynamic from 'next/dynamic';
import CardData from '../../../components/Cards/DataCard/DataCard';
import Wrapper from '../../../helpers/Hoc/Wrappers/Wrapper';
import VaccineChart from '../../../components/Charts/VaccineChart/VaccineChart';
import PieChart from '../../../components/Charts/PieCharts/PieChart';
import ButtonLink from '../../../helpers/Hoc/Buttons/ButtonLink';
import LineChart from '../../../components/Charts/LineChart/LineChart';
import GlobalInfoList from '../../../components/Typography/GlobalInfoList/GlobalInfoList';
import SvgIcon from '../../../components/SVGIcons/SVGIcons';
import { connect } from 'react-redux';
import * as actions from '../../../store/Actions/actions';
import SVGIcons from '../../../components/SVGIcons/SVGIcons';
// ...

// const CardData = dynamic(import('../../../components/Cards/DataCard/DataCard'));
//******************************** */

const Home = (props: any) => {
    const globalCards = Object.keys(props.globalData).map((data: any) => {
        // console.log(props.globalData[data].totalToday);
        return (
            <CardData
                key={data}
                name={data}
                todayValue={props.globalData[data].totalToday}
                yesterdayValue={props.globalData[data].totalYesterday}
            />
        );
    });
    useEffect(() => {
        props.fetch_Today_GlobalData();
        props.fetch_Yesterday_GlobalData();
        props.fetch_vaccine_data();
    }, []);

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="images/virus-1.svg" />
                <title>Home - Covid-19 Tracker</title>
            </Head>
            <section className="home home-content">
                <Wrapper class="page" style={{ marginBottom: '1rem' }}>
                    <h1>Hi this is Home page</h1>
                </Wrapper>
                <Wrapper class="main-cards">{globalCards}</Wrapper>

                <Wrapper class="data data-content mt-l">
                    <Wrapper class="data-analytics card vac-card">
                        {/* //- Vaccine Chart */}
                        <Wrapper class=" card-header jc-sb">
                            Vaccine Data Analytics
                            <ButtonLink href="/vaccine" class="btn btn__norm">
                                More details
                            </ButtonLink>
                        </Wrapper>
                        <Wrapper class="card-body pt-n">
                            <Wrapper class="d-flex jc-c">
                                <Wrapper class="card-body-analytics ta-c">
                                    <span className="" style={{ height: '2rem' }}>
                                        {/* <SVGIcons title="candidate" class="icon" /> */}
                                        Total candidates
                                    </span>
                                    <p>{props.totalCandidates}</p>
                                </Wrapper>
                            </Wrapper>
                            <Wrapper class="vaccine-chart">
                                <VaccineChart />
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                    {/* //- Pie chart */}
                    <Wrapper class="data-analytics card pie-card">
                        <Wrapper class=" card-header">Data Analytics Title</Wrapper>
                        <Wrapper class="card-body">
                            Today Data
                            <Wrapper class="pie-chart">
                                {' '}
                                <PieChart />{' '}
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Wrapper class="data data-content mb-l">
                    {/* //- Global Info list */}
                    <Wrapper class="data-analytics card info-card">
                        <Wrapper class=" card-header">
                            <Wrapper class="card-header--icon mr-s">
                                <SvgIcon title="info" />
                            </Wrapper>
                            <h3 className="card-header--text">Global Data information</h3>
                        </Wrapper>
                        <Wrapper class="card-body globalInfo">
                            <GlobalInfoList />
                        </Wrapper>
                    </Wrapper>
                    {/* //- 2021 History cases */}
                    <Wrapper class="data-analytics line-card">
                        <Wrapper class=" card-header jc-sb">
                            Data Analytics Title for 2021 cases
                            <ButtonLink
                                href="/charts"
                                class="btn btn__norm"
                                style={{ float: 'right' }}
                            >
                                More details
                            </ButtonLink>
                        </Wrapper>
                        <Wrapper class="card-body">
                            History Chart
                            <Wrapper class="line-chart">
                                {' '}
                                <LineChart />{' '}
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
    globalData: state.GlobalData.globalData,
    phases: state.VaccineData.phases,
    totalCandidates: state.VaccineData.totalCandidates,
});

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
    fetch_Today_GlobalData: () => dispatch(actions.GlobalData.today.fetch_Today_GlobalData()),
    fetch_Yesterday_GlobalData: () =>
        dispatch(actions.GlobalData.yesterday.fetch_Yesterday_GlobalData()),
    fetch_vaccine_data: () => dispatch(actions.VaccineData.fetch_vaccine_data()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
