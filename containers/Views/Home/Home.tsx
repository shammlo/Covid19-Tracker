//********** IMPORTS ************* */
import React from 'react';
import Head from 'next/head';
import CardData from '../../../components/Cards/DataCard/DataCard';
import Wrapper from '../../../helpers/Hoc/Wrappers/Wrapper';
import VaccineChart from '../../../components/Charts/VaccineChart/VaccineChart';
//******************************** */

const Home = () => {
    // const day = 1000;
    // // * 60 * 60 * 24;
    // var indexVariable = 56;
    // setInterval(function () {
    //     indexVariable = (indexVariable + 1) % 361;
    //     console.log(indexVariable);
    // }, day);

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/virus-1.svg" />
                <title>Home</title>
            </Head>
            <section className="home home-content">
                <Wrapper class="page" style={{ marginBottom: '1rem' }}>
                    <h1>Hi this is Home page</h1>
                </Wrapper>
                <Wrapper class="card chart-cards">
                    <CardData />
                    <CardData />
                    <CardData />
                    <CardData />
                    <CardData />
                    <CardData />
                </Wrapper>

                <Wrapper class="data data-content">
                    <Wrapper class="data-analytics">
                        <Wrapper class="data-analytics--title">
                            Data Analytics Title for vaccine
                        </Wrapper>
                        <Wrapper class="data-analytics--chart">
                            Data Analytics Chart
                            <Wrapper class="vaccine-chart">
                                <VaccineChart />
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper class="data-analytics">
                        <Wrapper class="data-analytics--title">Data Analytics Title</Wrapper>
                        <Wrapper class="data-analytics--chart">
                            Data Analytics Chart
                            <div className="progress">
                                <div
                                    className="progress-bar bg-secondary"
                                    role="progressbar"
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                ></div>
                            </div>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </section>
        </>
    );
};

export default Home;
