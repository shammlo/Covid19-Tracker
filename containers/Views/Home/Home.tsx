//********** IMPORTS ************* */
import React from 'react';
import Head from 'next/head';
import CardData from '../../../components/Cards/DataCard/DataCard';
import Wrapper from '../../../helpers/Hoc/Wrappers/Wrapper';
//******************************** */

const Home = () => {
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
                        <Wrapper class="data-analytics--title">Data Analytics Title</Wrapper>
                        <Wrapper class="data-analytics--chart">Data Analytics Chart</Wrapper>
                    </Wrapper>
                    <Wrapper class="data-analytics">
                        <Wrapper class="data-analytics--title">Data Analytics Title</Wrapper>
                        <Wrapper class="data-analytics--chart">Data Analytics Chart</Wrapper>
                    </Wrapper>
                </Wrapper>
            </section>
        </>
    );
};

export default Home;
